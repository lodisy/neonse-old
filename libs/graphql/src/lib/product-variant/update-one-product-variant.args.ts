import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantUpdateInput } from './product-variant-update.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantArgs {

    @Field(() => ProductVariantUpdateInput, {nullable:false})
    data!: ProductVariantUpdateInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;
}
