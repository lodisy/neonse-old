import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';
import { ProductCategoryCreateOrConnectWithoutChildrenInput } from './product-category-create-or-connect-without-children.input';
import { ProductCategoryUpsertWithoutChildrenInput } from './product-category-upsert-without-children.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithoutChildrenInput } from './product-category-update-without-children.input';

@InputType()
export class ProductCategoryUpdateOneWithoutChildrenInput {

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:true})
    create?: ProductCategoryCreateWithoutChildrenInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCategoryUpsertWithoutChildrenInput, {nullable:true})
    upsert?: ProductCategoryUpsertWithoutChildrenInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    connect?: ProductCategoryWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductCategoryUpdateWithoutChildrenInput, {nullable:true})
    update?: ProductCategoryUpdateWithoutChildrenInput;
}
