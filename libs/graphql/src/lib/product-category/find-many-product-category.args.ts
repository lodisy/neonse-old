import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { ProductCategoryOrderByInput } from './product-category-order-by.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryScalarFieldEnum } from './product-category-scalar-field.enum';

@ArgsType()
export class FindManyProductCategoryArgs {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    where?: ProductCategoryWhereInput;

    @Field(() => [ProductCategoryOrderByInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByInput>;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: ProductCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}
