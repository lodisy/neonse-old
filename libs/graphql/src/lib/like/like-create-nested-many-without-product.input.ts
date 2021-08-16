import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutProductInput } from './like-create-without-product.input';
import { LikeCreateOrConnectWithoutProductInput } from './like-create-or-connect-without-product.input';
import { LikeCreateManyProductInputEnvelope } from './like-create-many-product-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeCreateNestedManyWithoutProductInput {

    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;

    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;

    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: LikeCreateManyProductInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
}
