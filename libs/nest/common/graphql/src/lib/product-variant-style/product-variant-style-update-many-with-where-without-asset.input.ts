import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleScalarWhereInput } from './product-variant-style-scalar-where.input';
import { ProductVariantStyleUpdateManyMutationInput } from './product-variant-style-update-many-mutation.input';

@InputType()
export class ProductVariantStyleUpdateManyWithWhereWithoutAssetInput {

    @Field(() => ProductVariantStyleScalarWhereInput, {nullable:false})
    where!: ProductVariantStyleScalarWhereInput;

    @Field(() => ProductVariantStyleUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantStyleUpdateManyMutationInput;
}
