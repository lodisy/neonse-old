import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';

@InputType()
export class ProductVariantStyleRelationFilter {

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    is?: ProductVariantStyleWhereInput;

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    isNot?: ProductVariantStyleWhereInput;
}
