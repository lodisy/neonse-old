import { registerEnumType } from '@nestjs/graphql';

export enum SourceScalarFieldEnum {
    id = "id",
    name = "name",
    link = "link",
    fileId = "fileId"
}

registerEnumType(SourceScalarFieldEnum, { name: 'SourceScalarFieldEnum' })
