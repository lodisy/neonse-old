import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { ProductCategoryOrderByWithRelationInput } from './product-category-order-by-with-relation.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryScalarFieldEnum } from './product-category-scalar-field.enum';

@ArgsType()
export class FindFirstProductCategoryArgs {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    where?: ProductCategoryWhereInput;

    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: ProductCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}
