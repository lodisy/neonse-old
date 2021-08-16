import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUncheckedCreateNestedManyWithoutParentInput } from './product-category-unchecked-create-nested-many-without-parent.input';

@InputType()
export class ProductCategoryUncheckedCreateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryUncheckedCreateNestedManyWithoutParentInput;
}
