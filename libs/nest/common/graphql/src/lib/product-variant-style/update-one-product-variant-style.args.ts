import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleUpdateInput } from './product-variant-style-update.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantStyleArgs {

    @Field(() => ProductVariantStyleUpdateInput, {nullable:false})
    data!: ProductVariantStyleUpdateInput;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;
}
