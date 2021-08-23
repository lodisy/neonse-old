import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorUpdateInput } from './product-variant-color-update.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantColorArgs {

    @Field(() => ProductVariantColorUpdateInput, {nullable:false})
    data!: ProductVariantColorUpdateInput;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorWhereUniqueInput;
}
