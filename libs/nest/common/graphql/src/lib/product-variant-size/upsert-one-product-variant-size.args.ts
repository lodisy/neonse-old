import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';
import { ProductVariantSizeCreateInput } from './product-variant-size-create.input';
import { ProductVariantSizeUpdateInput } from './product-variant-size-update.input';

@ArgsType()
export class UpsertOneProductVariantSizeArgs {

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:false})
    where!: ProductVariantSizeWhereUniqueInput;

    @Field(() => ProductVariantSizeCreateInput, {nullable:false})
    create!: ProductVariantSizeCreateInput;

    @Field(() => ProductVariantSizeUpdateInput, {nullable:false})
    update!: ProductVariantSizeUpdateInput;
}
