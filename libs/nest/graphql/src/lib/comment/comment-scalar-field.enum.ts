import { registerEnumType } from '@nestjs/graphql'

export enum CommentScalarFieldEnum {
    id = 'id',
    name = 'name',
    email = 'email',
    profileId = 'profileId',
    content = 'content',
}

registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum' })
