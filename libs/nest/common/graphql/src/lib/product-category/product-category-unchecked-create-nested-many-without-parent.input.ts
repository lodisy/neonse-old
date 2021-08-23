import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input';
import { ProductCategoryCreateOrConnectWithoutParentInput } from './product-category-create-or-connect-without-parent.input';
import { ProductCategoryCreateManyParentInputEnvelope } from './product-category-create-many-parent-input-envelope.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [ProductCategoryCreateWithoutParentInput], {nullable:true})
    create?: Array<ProductCategoryCreateWithoutParentInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => ProductCategoryCreateManyParentInputEnvelope, {nullable:true})
    createMany?: ProductCategoryCreateManyParentInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<ProductCategoryWhereUniqueInput>;
}
