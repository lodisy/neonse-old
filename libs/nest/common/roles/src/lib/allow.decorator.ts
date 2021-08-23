import { SetMetadata } from '@nestjs/common'
import { Permission } from '@prisma/client'

export const PERMISSIONS_METADATA_KEY = '__permissions__'

/**
 * @description
 * 权限装饰器 for 角色
 *
 * @example
 * ```TypeScript
 *  \@Allow(Permission.SuperAdmin)
 *  \@Query()
 *  getAdministrators() {
 *      // ...
 *  }
 * ```
 *
 * @docsCategory request
 * @docsPage Allow Decorator
 */

export const Allow = (...permisions: Permission[]) => SetMetadata(PERMISSIONS_METADATA_KEY, permisions)
