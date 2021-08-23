import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleCreateInput } from './product-variant-style-create.input';
import { ProductVariantStyleUpdateInput } from './product-variant-style-update.input';

@ArgsType()
export class UpsertOneProductVariantStyleArgs {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleCreateInput, {nullable:false})
    create!: ProductVariantStyleCreateInput;

    @Field(() => ProductVariantStyleUpdateInput, {nullable:false})
    update!: ProductVariantStyleUpdateInput;
}
