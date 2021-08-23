import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeScalarWhereInput } from './product-type-scalar-where.input';
import { ProductTypeUpdateManyMutationInput } from './product-type-update-many-mutation.input';

@InputType()
export class ProductTypeUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => ProductTypeScalarWhereInput, {nullable:false})
    where!: ProductTypeScalarWhereInput;

    @Field(() => ProductTypeUpdateManyMutationInput, {nullable:false})
    data!: ProductTypeUpdateManyMutationInput;
}
