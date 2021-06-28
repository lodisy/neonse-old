import { Controller, Get, Param } from '@nestjs/common'
import { ProductTypesService } from './product-types.service'

@Controller('product-types')
export class ProductTypesController {
    constructor(private productTypesService: ProductTypesService) {}

    @Get()
    public getProductTypes() {
        return this.productTypesService.getProductTypes()
    }

    @Get(':slug')
    public getProductType(@Param('slug') slug: string) {
        return this.productTypesService.getProductType(slug)
    }
}
