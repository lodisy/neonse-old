import { registerEnumType } from '@nestjs/graphql'

export enum LocaleScalarFieldEnum {
    id = 'id',
    name = 'name',
    code = 'code',
}

registerEnumType(LocaleScalarFieldEnum, { name: 'LocaleScalarFieldEnum' })
