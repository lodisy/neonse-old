import { PrismaService } from '@neonse/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUser(email: string) {
        try {
            const result = await this.prisma.user.findFirst({ where: { email: email } })
            return result
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2001') {
                    console.log('User not existing')
                }
            }
            throw e
        }
    }
}
