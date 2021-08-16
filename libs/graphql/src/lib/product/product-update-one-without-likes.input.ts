import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutLikesInput } from './product-create-without-likes.input';
import { ProductCreateOrConnectWithoutLikesInput } from './product-create-or-connect-without-likes.input';
import { ProductUpsertWithoutLikesInput } from './product-upsert-without-likes.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutLikesInput } from './product-update-without-likes.input';

@InputType()
export class ProductUpdateOneWithoutLikesInput {

    @Field(() => ProductCreateWithoutLikesInput, {nullable:true})
    create?: ProductCreateWithoutLikesInput;

    @Field(() => ProductCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutLikesInput;

    @Field(() => ProductUpsertWithoutLikesInput, {nullable:true})
    upsert?: ProductUpsertWithoutLikesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductUpdateWithoutLikesInput, {nullable:true})
    update?: ProductUpdateWithoutLikesInput;
}
