import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';

@InputType()
export class ProductVariantColorRelationFilter {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    is?: ProductVariantColorWhereInput;

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    isNot?: ProductVariantColorWhereInput;
}
