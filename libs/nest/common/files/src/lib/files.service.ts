import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as mime from 'mime-types'
import * as sharp from 'sharp'

@Injectable()
export class FilesService {
    constructor(private prisma: PrismaService) {}

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

    // 计算文件 size 单位 bytes
    getFileSize(filepath: string): number {
        return fs.statSync(filepath).size
    }

    // 获得 minetype
    getMimeType(filepath: string) {
        return mime.lookup(filepath)
    }
    // 获得文件后缀
    getExtension(mimetype: string) {
        return mime.extension(mimetype)
    }

    // 获得图片长宽

    getImageDimensions(filepath: string) {
        const sizeOf = require('image-size')
        const dimensions = sizeOf(filepath)
        return {
            width: dimensions.width,
            height: dimensions.height,
        }
    }

    // 图片处理

    async imagify(input: Buffer, filename: string): Promise<sharp.OutputInfo> {
        const result = sharp(input)
            .toFormat('webp')
            .webp()
            .toFile(`uploads/${filename.substr(0, filename.lastIndexOf('.'))}.webp`)

        return result
    }
}
