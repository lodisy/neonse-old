import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAssetsInput } from './product-create-without-assets.input';
import { ProductCreateOrConnectWithoutAssetsInput } from './product-create-or-connect-without-assets.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutAssetsInput {

    @Field(() => ProductCreateWithoutAssetsInput, {nullable:true})
    create?: ProductCreateWithoutAssetsInput;

    @Field(() => ProductCreateOrConnectWithoutAssetsInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutAssetsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;
}
