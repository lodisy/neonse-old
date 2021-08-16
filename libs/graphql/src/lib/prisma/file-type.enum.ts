import { registerEnumType } from '@nestjs/graphql';

export enum FileType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    SOUND = "SOUND",
    OTHER = "OTHER"
}

registerEnumType(FileType, { name: 'FileType' })
