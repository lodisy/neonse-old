import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
    alt = "alt",
    caption = "caption",
    type = "type",
    size = "size",
    dimensions = "dimensions",
    createdAt = "createdAt"
}

registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum' })
