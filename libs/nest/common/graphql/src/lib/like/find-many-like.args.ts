import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { LikeOrderByInput } from './like-order-by.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LikeScalarFieldEnum } from './like-scalar-field.enum';

@ArgsType()
export class FindManyLikeArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;

    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: LikeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LikeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LikeScalarFieldEnum>;
}
