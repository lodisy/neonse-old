import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';
import { ProductVariantStyleOrderByWithRelationInput } from './product-variant-style-order-by-with-relation.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleScalarFieldEnum } from './product-variant-style-scalar-field.enum';

@ArgsType()
export class FindFirstProductVariantStyleArgs {

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    where?: ProductVariantStyleWhereInput;

    @Field(() => [ProductVariantStyleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleOrderByWithRelationInput>;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantStyleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantStyleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantStyleScalarFieldEnum>;
}
