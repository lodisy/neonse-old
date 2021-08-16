import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryCreateInput } from './product-category-create.input';
import { ProductCategoryUpdateInput } from './product-category-update.input';

@ArgsType()
export class UpsertOneProductCategoryArgs {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;

    @Field(() => ProductCategoryCreateInput, {nullable:false})
    create!: ProductCategoryCreateInput;

    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    update!: ProductCategoryUpdateInput;
}
