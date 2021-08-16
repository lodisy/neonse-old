import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';

@InputType()
export class ProductCreateOrConnectWithoutCategoriesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutCategoriesInput, {nullable:false})
    create!: ProductCreateWithoutCategoriesInput;
}
