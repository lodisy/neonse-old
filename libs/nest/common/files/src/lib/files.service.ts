import { COSService } from '@neonse/nest-common-cos'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { FileType, Prisma } from '@prisma/client'
import * as fs from 'fs'
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
        const path = 'uploads/image/'
        fs.mkdirSync(path, { recursive: true }) // 创建文件夹
        const result = sharp(input)
            .toFormat('webp')
            .webp()
            .toFile(`${path}${slugify(filename, { lower: true }).split('.')[0]}.webp`)

        return result
    }

    // 验证文件是否存在 不存在抛出异常，存在返回 true

    async isExisting(id: string): Promise<boolean> {
        const isExisting = await this.prisma.file.findFirst({
            where: {
                id,
            },
        })
        if (!isExisting)
            throw new HttpException(
                {
                    key: 'files.FILE_NOT_EXISTS',
                },
                HttpStatus.NOT_FOUND,
            )

        return true
    }
    // ------- //

    /** 上传单张图片，例如头像图 */

    async uploadImage(image: Express.Multer.File) {
        const { originalname, buffer } = image
        var slugify = require('slugify')
        const filename = `${slugify(originalname, { lower: true }).split('.')[0]}.webp`
        const result = await this.imagify(buffer, originalname)
        const { width, height, size } = result
        const url = await this.cos.uploadFile(filename)
        return this.prisma.file.create({
            data: {
                name: filename,
                mimeType: 'image/webp',
                format: 'IMAGE',
                width,
                height,
                size,
                url: url,
            },
        })
    }

    /** 上传多张图片 */

    async uploadImages(images: Array<Express.Multer.File>) {
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

    async uploadFiles(files: Array<Express.Multer.File>) {
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
        return this.prisma.file.findMany(query)
    }

    /**
     * 获取单个文件
     */

    async findFile(where: Prisma.FileWhereUniqueInput) {
        return this.prisma.file.findUnique({ where })
    }

    /**
     * 修改单个文件
     */

    async updateFile(where: Prisma.FileWhereUniqueInput, data: Prisma.FileUpdateInput) {
        return this.prisma.file.update({
            where,
            data,
        })
    }

    /**
     * 删除单个文件
     */

    async deleteFile(where: Prisma.FileWhereUniqueInput) {
        return this.prisma.file.delete({ where })
    }
}
