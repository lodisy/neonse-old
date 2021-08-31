import { COSService } from '@neonse/nest-common-cos'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { FileType, Prisma } from '@prisma/client'
import * as fs from 'fs'
import * as multer from 'multer'
import * as sharp from 'sharp'

@Injectable()
export class FilesService {
    constructor(private prisma: PrismaService, private cos: COSService) {}

    // 提取文件格式
    getFileType(mimetype: string) {
        if (mimetype.startsWith('image')) {
            return 'IMAGE'
        } else if (mimetype.startsWith('video')) {
            return 'VIDEO'
        } else if (mimetype.startsWith('audio')) {
            return 'AUDIO'
        } else if (mimetype === 'application/pdf') {
            return 'PDF'
        } else return 'BINARY'
    }

    // 图片处理

    async imagify(input: Buffer, filename: string): Promise<sharp.OutputInfo> {
        var slugify = require('slugify')
        const result = sharp(input)
            .toFormat('webp')
            .webp()
            .toFile(`uploads/image/${slugify(filename, { lower: true }).split('.')[0]}.webp`)

        return result
    }

    // 验证文件是否存在 不存在抛出异常，存在返回 true

    async isExisting(id: string): Promise<boolean> {
        const isExisting = await this.prisma.file.findFirst({
            where: {
                id,
            },
        })
        if (!isExisting) throw new HttpException('文件不存在', HttpStatus.NOT_FOUND)

        return true
    }
    // ------- //

    /** 上传单张图片，例如头像图 */
    @UseInterceptors(
        FileInterceptor('image', {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                if (file.mimetype.startsWith('image')) {
                    cb(null, true)
                } else {
                    cb(new Error('仅支持图片文件'), false)
                }
            },
        }),
    )
    async uploadImage(@UploadedFile() image: Express.Multer.File) {
        const { originalname, buffer } = image
        var slugify = require('slugify')
        const filename = `${slugify(originalname, { lower: true }).split('.')[0]}.webp`
        const result = await this.imagify(buffer, originalname)
        const { width, height, size } = result
        const url = await this.cos.uploadFile(filename)
        return await this.prisma.file.create({
            data: {
                name: filename,
                mimeType: 'image/webp',
                format: 'IMAGE',
                width,
                height,
                size,
                url,
            },
        })
    }

    /** 上传多张图片 */
    @UseInterceptors(
        FilesInterceptor('images', 10, {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                if (file.mimetype.startsWith('image')) {
                    cb(null, true)
                } else {
                    cb(new Error('仅支持图片文件'), false)
                }
            },
        }),
    )
    async uploadImages(@UploadedFiles() images: Array<Express.Multer.File>) {
        var data = []
        Promise.all(
            images.map(async (image) => {
                const { originalname, buffer } = image
                var slugify = require('slugify')
                const filename = `${slugify(originalname, { lower: true }).split('.')[0]}.webp`
                const result = await this.imagify(buffer, originalname)
                const { width, height, size } = result
                const url = await this.cos.uploadFile(filename)
                data.push({
                    name: filename,
                    mimeType: 'image/webp',
                    format: 'IMAGE',
                    width,
                    height,
                    size,
                    url,
                })
            }),
        )
        await this.prisma.file.createMany({
            data,
        })
    }

    /** 上传非图片类文件 */

    @UseInterceptors(
        FilesInterceptor('files', 5, {
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    const format = file.mimetype.split('/')[0]
                    const path = `uploads/${format}/`
                    fs.mkdirSync(path, { recursive: true }) // 创建文件夹
                    cb(null, path)
                }, // 创建文件夹
                filename: (req, file, cb) => {
                    var slugify = require('slugify')
                    cb(null, slugify(file.originalname, { lower: true }))
                },
            }),
            fileFilter: (req, file, cb) => {
                if (
                    file.mimetype.startsWith('audio') ||
                    file.mimetype.startsWith('video') ||
                    file.mimetype.startsWith('model') ||
                    file.mimetype.endsWith('pdf')
                ) {
                    cb(null, true)
                } else {
                    cb(new Error('该格式文件暂不支持'), false)
                }
            },
        }),
    )
    async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        var data = []
        Promise.all(
            files.map(async (file) => {
                const { originalname, mimetype, size } = file
                const format = this.getFileType(mimetype) as FileType

                const url = await this.cos.uploadFile(originalname)
                data.push({
                    name: originalname,
                    mimeType: mimetype,
                    size,
                    format,
                    url,
                })
            }),
        )
        await this.prisma.file.createMany({
            data,
        })
    }

    /**
     * 获取所有文件
     */

    async findFiles(query: Prisma.FileFindManyArgs) {
        return await this.prisma.file.findMany(query)
    }

    /**
     * 获取单个文件
     */

    async findFile(where: Prisma.FileWhereUniqueInput) {
        return await this.prisma.file.findUnique({ where })
    }

    /**
     * 修改单个文件
     */

    async updateFile(where: Prisma.FileWhereUniqueInput, data: Prisma.FileUpdateInput) {
        return await this.prisma.file.update({
            where,
            data,
        })
    }

    /**
     * 删除单个文件
     */

    async deleteFile(where: Prisma.FileWhereUniqueInput) {
        return await this.prisma.file.delete({ where })
    }
}
