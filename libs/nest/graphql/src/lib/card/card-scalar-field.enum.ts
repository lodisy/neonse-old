import { registerEnumType } from '@nestjs/graphql'

export enum CardScalarFieldEnum {
    id = 'id',
    profileId = 'profileId',
    number = 'number',
    name = 'name',
    expiration = 'expiration',
    bank = 'bank',
}

registerEnumType(CardScalarFieldEnum, { name: 'CardScalarFieldEnum' })
