import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';

@InputType()
export class ProductVariantListRelationFilter {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    every?: ProductVariantWhereInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    some?: ProductVariantWhereInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    none?: ProductVariantWhereInput;
}
