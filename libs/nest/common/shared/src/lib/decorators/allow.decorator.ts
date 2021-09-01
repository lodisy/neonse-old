import { SetMetadata } from '@nestjs/common'
import { Permission } from '@prisma/client'

export const PERMISSIONS_METADATA_KEY = '__permissions__'

/**
 * @description
 * @example
 */
export const Allow = (...permissions: Permission[]) => SetMetadata(PERMISSIONS_METADATA_KEY, permissions)
