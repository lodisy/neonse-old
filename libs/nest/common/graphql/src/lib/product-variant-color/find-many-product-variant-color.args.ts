import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';
import { ProductVariantColorOrderByWithRelationInput } from './product-variant-color-order-by-with-relation.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorScalarFieldEnum } from './product-variant-color-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantColorArgs {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;

    @Field(() => [ProductVariantColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantColorOrderByWithRelationInput>;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantColorScalarFieldEnum>;
}
