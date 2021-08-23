import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutAssetsInput } from './product-create-without-assets.input';

@InputType()
export class ProductCreateOrConnectWithoutAssetsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutAssetsInput, {nullable:false})
    create!: ProductCreateWithoutAssetsInput;
}
