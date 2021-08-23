import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutCategoriesInput } from './product-update-without-categories.input';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutCategoriesInput, {nullable:false})
    update!: ProductUpdateWithoutCategoriesInput;

    @Field(() => ProductCreateWithoutCategoriesInput, {nullable:false})
    create!: ProductCreateWithoutCategoriesInput;
}
