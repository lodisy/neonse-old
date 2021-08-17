import { registerEnumType } from '@nestjs/graphql'

export enum AddressScalarFieldEnum {
    id = 'id',
    profileId = 'profileId',
    name = 'name',
    email = 'email',
    phone = 'phone',
    street = 'street',
    district = 'district',
    city = 'city',
    state = 'state',
    zip = 'zip',
    country = 'country',
}

registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum' })
