import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';

@InputType()
export class ProductVariantSizeRelationFilter {

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    is?: ProductVariantSizeWhereInput;

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    isNot?: ProductVariantSizeWhereInput;
}
