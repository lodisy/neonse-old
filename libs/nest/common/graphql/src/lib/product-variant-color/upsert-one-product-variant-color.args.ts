import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { ProductVariantColorCreateInput } from './product-variant-color-create.input';
import { ProductVariantColorUpdateInput } from './product-variant-color-update.input';

@ArgsType()
export class UpsertOneProductVariantColorArgs {

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorWhereUniqueInput;

    @Field(() => ProductVariantColorCreateInput, {nullable:false})
    create!: ProductVariantColorCreateInput;

    @Field(() => ProductVariantColorUpdateInput, {nullable:false})
    update!: ProductVariantColorUpdateInput;
}
