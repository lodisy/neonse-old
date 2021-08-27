import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
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
}
