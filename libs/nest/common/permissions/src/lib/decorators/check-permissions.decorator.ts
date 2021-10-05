import { CustomDecorator, SetMetadata } from '@nestjs/common'
import { PermissionHandler } from '../permission-handler.interface'

export const CHECK_PERMISSIONS_KEY = 'check_permissions'

export const CheckPermissions = (...handlers: PermissionHandler[]): CustomDecorator<string> =>
    SetMetadata(CHECK_PERMISSIONS_KEY, handlers)
