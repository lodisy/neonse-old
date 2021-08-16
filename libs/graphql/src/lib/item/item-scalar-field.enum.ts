import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    quantity = "quantity"
}

registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum' })
