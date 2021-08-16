import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';
import { ProductCreateOrConnectWithoutCategoriesInput } from './product-create-or-connect-without-categories.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutCategoriesInput {

    @Field(() => [ProductCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<ProductCreateWithoutCategoriesInput>;

    @Field(() => [ProductCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
