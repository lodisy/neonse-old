import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';

@InputType()
export class ProductVariantStyleListRelationFilter {

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    every?: ProductVariantStyleWhereInput;

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    some?: ProductVariantStyleWhereInput;

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    none?: ProductVariantStyleWhereInput;
}
