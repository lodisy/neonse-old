import { Test } from '@nestjs/testing'
import { ProductTypesController } from './product-types.controller'
import { ProductTypesService } from './product-types.service'

describe('ProductTypesController', () => {
    let controller: ProductTypesController

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ProductTypesService],
            controllers: [ProductTypesController],
        }).compile()

        controller = module.get(ProductTypesController)
    })

    it('should be defined', () => {
        expect(controller).toBeTruthy()
    })
})
