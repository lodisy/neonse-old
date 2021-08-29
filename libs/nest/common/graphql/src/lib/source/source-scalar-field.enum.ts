import { registerEnumType } from '@nestjs/graphql';

export enum SourceScalarFieldEnum {
    id = "id",
    name = "name",
    link = "link"
}


registerEnumType(SourceScalarFieldEnum, { name: 'SourceScalarFieldEnum', description: undefined })
