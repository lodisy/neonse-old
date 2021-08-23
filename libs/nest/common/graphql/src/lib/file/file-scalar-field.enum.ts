import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
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
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    customFields = "customFields",
    profileId = "profileId",
    profileAvatarId = "profileAvatarId",
    productId = "productId",
    productVariantId = "productVariantId",
    reviewId = "reviewId"
}

registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum' })
