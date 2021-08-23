import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    phone = "phone",
    point = "point",
    level = "level"
}

registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum' })
