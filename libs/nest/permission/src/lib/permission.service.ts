import { PrismaService } from '@neonse/nest-prisma'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PermissionService {
    constructor(private prisma: PrismaService) {}

    /**  */
}
