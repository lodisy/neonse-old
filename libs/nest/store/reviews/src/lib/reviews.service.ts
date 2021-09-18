import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, Review } from '@prisma/client'

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) {}

    async addReview(data: Prisma.ReviewCreateInput): Promise<Review> {
        return this.prisma.review.create({ data })
    }

    async modifyReview(where: Prisma.ReviewWhereUniqueInput, data: Prisma.ReviewUpdateInput): Promise<Review> {
        return this.prisma.review.update({ where, data })
    }
}
