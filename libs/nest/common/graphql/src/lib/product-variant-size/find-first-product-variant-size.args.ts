import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';
import { ProductVariantSizeOrderByWithRelationInput } from './product-variant-size-order-by-with-relation.input';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantSizeScalarFieldEnum } from './product-variant-size-scalar-field.enum';

@ArgsType()
export class FindFirstProductVariantSizeArgs {

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    where?: ProductVariantSizeWhereInput;

    @Field(() => [ProductVariantSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantSizeOrderByWithRelationInput>;

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantSizeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantSizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantSizeScalarFieldEnum>;
}
