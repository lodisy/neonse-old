import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { ReviewOrderByInput } from './review-order-by.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';

@ArgsType()
export class FindFirstReviewArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByInput], {nullable:true})
    orderBy?: Array<ReviewOrderByInput>;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: ReviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}
