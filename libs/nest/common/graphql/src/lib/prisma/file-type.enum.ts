import { registerEnumType } from '@nestjs/graphql'

export enum FileType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    PDF = 'PDF',
    BINARY = 'BINARY',
}

registerEnumType(FileType, { name: 'FileType', description: '文件类型' })
