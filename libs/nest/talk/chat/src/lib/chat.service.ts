import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) {}

    /** 发送消息 */
    async sendMessage(data: Prisma.MessageCreateInput) {
        return await this.prisma.message.create({
            data,
        })
    }
    /** 查询多条消息 */
    async findMessages(query: Prisma.MessageFindManyArgs) {
        return await this.prisma.message.findMany(query)
    }
}
