import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutProductInput } from './like-create-without-product.input';
import { LikeCreateOrConnectWithoutProductInput } from './like-create-or-connect-without-product.input';
import { LikeUpsertWithWhereUniqueWithoutProductInput } from './like-upsert-with-where-unique-without-product.input';
import { LikeCreateManyProductInputEnvelope } from './like-create-many-product-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutProductInput } from './like-update-with-where-unique-without-product.input';
import { LikeUpdateManyWithWhereWithoutProductInput } from './like-update-many-with-where-without-product.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutProductInput {

    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;

    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: LikeCreateManyProductInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    set?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    disconnect?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    delete?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<LikeUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<LikeUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    deleteMany?: Array<LikeScalarWhereInput>;
}
