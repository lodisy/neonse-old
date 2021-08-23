import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAssetsInput } from './product-create-without-assets.input';
import { ProductCreateOrConnectWithoutAssetsInput } from './product-create-or-connect-without-assets.input';
import { ProductUpsertWithoutAssetsInput } from './product-upsert-without-assets.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutAssetsInput } from './product-update-without-assets.input';

@InputType()
export class ProductUpdateOneWithoutAssetsInput {

    @Field(() => ProductCreateWithoutAssetsInput, {nullable:true})
    create?: ProductCreateWithoutAssetsInput;

    @Field(() => ProductCreateOrConnectWithoutAssetsInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutAssetsInput;

    @Field(() => ProductUpsertWithoutAssetsInput, {nullable:true})
    upsert?: ProductUpsertWithoutAssetsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductUpdateWithoutAssetsInput, {nullable:true})
    update?: ProductUpdateWithoutAssetsInput;
}
