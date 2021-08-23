import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';
import { ProductVariantColorOrderByInput } from './product-variant-color-order-by.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorScalarFieldEnum } from './product-variant-color-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantColorArgs {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;

    @Field(() => [ProductVariantColorOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantColorOrderByInput>;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantColorScalarFieldEnum>;
}
