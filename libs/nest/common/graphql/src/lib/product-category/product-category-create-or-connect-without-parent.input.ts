import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutParentInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;

    @Field(() => ProductCategoryCreateWithoutParentInput, {nullable:false})
    create!: ProductCategoryCreateWithoutParentInput;
}
