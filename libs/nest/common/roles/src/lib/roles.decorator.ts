import { SetMetadata } from '@nestjs/common'
import { Role } from '@prisma/client'
/**
 * @example
 * ```TypeScript
 *  \@Roles('admin')
 *  \@Query()
 *  getAdministrators() {
 *      // ...
 *  }
 * ```
 */
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles)
