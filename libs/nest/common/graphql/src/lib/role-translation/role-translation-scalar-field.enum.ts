import { registerEnumType } from '@nestjs/graphql';

export enum RoleTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    description = "description",
    roleId = "roleId"
}

registerEnumType(RoleTranslationScalarFieldEnum, { name: 'RoleTranslationScalarFieldEnum' })
