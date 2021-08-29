import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    url = "url",
    alt = "alt",
    title = "title",
    caption = "caption",
    format = "format",
    mimeType = "mimeType",
    size = "size",
    width = "width",
    height = "height",
    sourceId = "sourceId",
    autoPlay = "autoPlay",
    customFields = "customFields",
    profileId = "profileId",
    profileAvatarId = "profileAvatarId",
    productId = "productId",
    productVariantId = "productVariantId",
    reviewId = "reviewId"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
