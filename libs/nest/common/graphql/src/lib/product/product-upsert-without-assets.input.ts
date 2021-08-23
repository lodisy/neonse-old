import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutAssetsInput } from './product-update-without-assets.input';
import { ProductCreateWithoutAssetsInput } from './product-create-without-assets.input';

@InputType()
export class ProductUpsertWithoutAssetsInput {

    @Field(() => ProductUpdateWithoutAssetsInput, {nullable:false})
    update!: ProductUpdateWithoutAssetsInput;

    @Field(() => ProductCreateWithoutAssetsInput, {nullable:false})
    create!: ProductCreateWithoutAssetsInput;
}
