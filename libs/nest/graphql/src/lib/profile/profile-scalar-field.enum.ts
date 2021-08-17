import { registerEnumType } from '@nestjs/graphql'

export enum ProfileScalarFieldEnum {
    id = 'id',
    userId = 'userId',
    brandId = 'brandId',
    name = 'name',
    phone = 'phone',
    avatar = 'avatar',
    point = 'point',
    level = 'level',
}

registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum' })
