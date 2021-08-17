import { Test } from '@nestjs/testing'
import { PasswordService } from './password.service'

describe('PasswordService', () => {
    let service: PasswordService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [PasswordService],
        }).compile()

        service = module.get(PasswordService)
    })

    it('should be defined', () => {
        expect(service).toBeTruthy()
    })
})
