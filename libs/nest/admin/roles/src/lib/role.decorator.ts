import { SetMetadata } from '@nestjs/common'
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
export const Roles = (...roles: string[]) => SetMetadata('roles', roles)
