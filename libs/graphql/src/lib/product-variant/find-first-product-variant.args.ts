import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { ProductVariantOrderByInput } from './product-variant-order-by.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantScalarFieldEnum } from './product-variant-scalar-field.enum';

@ArgsType()
export class FindFirstProductVariantArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    where?: ProductVariantWhereInput;

    @Field(() => [ProductVariantOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByInput>;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}
