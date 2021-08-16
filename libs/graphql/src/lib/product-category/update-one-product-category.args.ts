import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryUpdateInput } from './product-category-update.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@ArgsType()
export class UpdateOneProductCategoryArgs {

    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    data!: ProductCategoryUpdateInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;
}
