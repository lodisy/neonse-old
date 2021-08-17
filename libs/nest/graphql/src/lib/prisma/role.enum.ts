import { registerEnumType } from '@nestjs/graphql'

export enum Role {
    READER = 'READER',
    BUYER = 'BUYER',
    AUTHOR = 'AUTHOR',
    SELLER = 'SELLER',
    EDITOR = 'EDITOR',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
}

registerEnumType(Role, { name: 'Role' })
