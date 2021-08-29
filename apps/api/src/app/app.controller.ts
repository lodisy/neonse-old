import { ProductsService } from '@neonse/nest-products'
import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async testPermission() {}
}
