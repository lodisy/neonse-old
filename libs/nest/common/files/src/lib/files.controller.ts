import { COSService } from '@neonse/nest-common-cos'
import { FileType } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { FileInterceptor } from '@nestjs/platform-express'
import { Prisma } from '@prisma/client'
import * as multer from 'multer'
import { FilesService } from './files.service'

@Controller()
export class FilesController {
    constructor(
        private prisma: PrismaService,
        private filesService: FilesService,
        private cos: COSService,
        private configService: ConfigService,
    ) {}

    /**
     * 先上传到本地，进行图片处理后，再将图片上传到 COS，返回 ok 再删除本地
     */

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                if (
                    file.mimetype.startsWith('image') ||
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
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const { originalname, mimetype, size, buffer } = file

        console.log(file)

        const format = this.filesService.getFileType(mimetype) as FileType

        var data = {} as Omit<Prisma.FileCreateInput, 'url'>

        const filename =
            format === 'IMAGE' ? `${originalname.substr(0, originalname.lastIndexOf('.'))}.webp` : originalname

        if (format === 'IMAGE') {
            const result = await this.filesService.imagify(buffer, originalname)
            const { width, height, size } = result

            data = {
                name: filename,
                mimeType: 'image/webp',
                format: 'IMAGE',
                width,
                height,
                size,
            }
        } else {
            data = {
                name: filename,
                mimeType: mimetype,
                size,
                format,
            }
        }

        const url = await this.cos.uploadFile(filename)

        console.log('url', url)

        // return await this.prisma.file.create({
        //     data: {
        //         url,
        //         ...data,
        //     },
        // })
    }
}
