import { registerEnumType } from '@nestjs/graphql';

export enum Action {
    Manage = "Manage",
    Create = "Create",
    Update = "Update",
    Read = "Read",
    Delete = "Delete"
}


registerEnumType(Action, { name: 'Action', description: "权限的 Action" })
