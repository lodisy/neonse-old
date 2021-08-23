import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateWithoutProductInput } from './like-create-without-product.input';

@InputType()
export class LikeCreateOrConnectWithoutProductInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateWithoutProductInput, {nullable:false})
    create!: LikeCreateWithoutProductInput;
}
