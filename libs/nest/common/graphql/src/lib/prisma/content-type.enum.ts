import { registerEnumType } from '@nestjs/graphql';

export enum ContentType {
    PRODUCT = "PRODUCT",
    ARTICLE = "ARTICLE",
    LOOKBOOK = "LOOKBOOK",
    BRAND = "BRAND"
}


registerEnumType(ContentType, { name: 'ContentType', description: "内容类型" })
