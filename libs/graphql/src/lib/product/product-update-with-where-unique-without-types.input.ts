import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutTypesInput } from './product-update-without-types.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutTypesInput, {nullable:false})
    data!: ProductUpdateWithoutTypesInput;
}
