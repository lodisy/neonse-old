import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyByInput } from './review-create-many-by.input';

@InputType()
export class ReviewCreateManyByInputEnvelope {

    @Field(() => [ReviewCreateManyByInput], {nullable:false})
    data!: Array<ReviewCreateManyByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
