import { registerEnumType } from '@nestjs/graphql';

export enum OrderDetailScalarFieldEnum {
    id = "id"
}

registerEnumType(OrderDetailScalarFieldEnum, { name: 'OrderDetailScalarFieldEnum' })
