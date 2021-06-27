import { prisma } from '@neonse/prisma'
import { Injectable } from '@nestjs/common'
import { Product } from '@prisma/client'

@Injectable()
export class ProductsService {
    public getProducts(): Promise<Product[]> {
        return prisma.product.findMany()
    }
}
