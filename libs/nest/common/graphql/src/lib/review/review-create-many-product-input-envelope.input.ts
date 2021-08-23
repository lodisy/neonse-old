import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyProductInput } from './review-create-many-product.input';

@InputType()
export class ReviewCreateManyProductInputEnvelope {

    @Field(() => [ReviewCreateManyProductInput], {nullable:false})
    data!: Array<ReviewCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
