import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeUpdateInput } from './product-variant-size-update.input';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantSizeArgs {

    @Field(() => ProductVariantSizeUpdateInput, {nullable:false})
    data!: ProductVariantSizeUpdateInput;

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:false})
    where!: ProductVariantSizeWhereUniqueInput;
}
