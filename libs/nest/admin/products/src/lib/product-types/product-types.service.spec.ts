import { Test } from '@nestjs/testing'
import { ProductTypesService } from './product-types.service'

describe('ProductTypesService', () => {
    let service: ProductTypesService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ProductTypesService],
        }).compile()

        service = module.get(ProductTypesService)
    })

    it('should be defined', () => {
        expect(service).toBeTruthy()
    })
})
