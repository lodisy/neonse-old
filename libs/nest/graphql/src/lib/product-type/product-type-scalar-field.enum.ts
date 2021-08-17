import { registerEnumType } from '@nestjs/graphql'

export enum ProductTypeScalarFieldEnum {
    id = 'id',
    name = 'name',
    slug = 'slug',
}

registerEnumType(ProductTypeScalarFieldEnum, { name: 'ProductTypeScalarFieldEnum' })
