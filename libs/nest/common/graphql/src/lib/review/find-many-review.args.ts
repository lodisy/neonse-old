import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { ReviewOrderByWithRelationInput } from './review-order-by-with-relation.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';

@ArgsType()
export class FindManyReviewArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: ReviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}
