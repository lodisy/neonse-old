import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as mime from 'mime-types'

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
    getFileSize(filename: string): number {
        return fs.statSync(filename).size
    }

    // 获得 minetype
    getMimeType(filepath: string) {
        return mime.lookup(filepath)
    }

    // 获得图片长宽
}
