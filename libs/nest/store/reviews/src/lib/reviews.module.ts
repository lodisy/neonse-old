import { Module } from '@nestjs/common'
import { ReviewsService } from './reviews.service'

@Module({
    controllers: [],
    providers: [ReviewsService],
    exports: [ReviewsService],
})
export class ReviewsModule {}
