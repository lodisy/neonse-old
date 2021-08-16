import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';
import { ProductCategoryCreateOrConnectWithoutProductsInput } from './product-category-create-or-connect-without-products.input';
import { ProductCategoryUpsertWithWhereUniqueWithoutProductsInput } from './product-category-upsert-with-where-unique-without-products.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithWhereUniqueWithoutProductsInput } from './product-category-update-with-where-unique-without-products.input';
import { ProductCategoryUpdateManyWithWhereWithoutProductsInput } from './product-category-update-many-with-where-without-products.input';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';

@InputType()
export class ProductCategoryUpdateManyWithoutProductsInput {

    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    create?: Array<ProductCategoryCreateWithoutProductsInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<ProductCategoryWhereUniqueInput>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    set?: Array<ProductCategoryWhereUniqueInput>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductCategoryWhereUniqueInput>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    delete?: Array<ProductCategoryWhereUniqueInput>;

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
