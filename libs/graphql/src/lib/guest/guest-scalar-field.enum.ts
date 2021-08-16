import { registerEnumType } from '@nestjs/graphql';

export enum GuestScalarFieldEnum {
    identifierToken = "identifierToken",
    email = "email"
}

registerEnumType(GuestScalarFieldEnum, { name: 'GuestScalarFieldEnum' })
