import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';
import { ProductCategoryUpdateManyMutationInput } from './product-category-update-many-mutation.input';

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutProductsInput {

    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    where!: ProductCategoryScalarWhereInput;

    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    data!: ProductCategoryUpdateManyMutationInput;
}
