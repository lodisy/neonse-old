import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';

@InputType()
export class ProductVariantRelationFilter {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    is?: ProductVariantWhereInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    isNot?: ProductVariantWhereInput;
}
