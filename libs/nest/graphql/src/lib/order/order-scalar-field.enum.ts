import { registerEnumType } from '@nestjs/graphql'

export enum OrderScalarFieldEnum {
    id = 'id',
}

registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum' })
