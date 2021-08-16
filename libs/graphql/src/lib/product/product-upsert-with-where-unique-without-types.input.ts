import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutTypesInput } from './product-update-without-types.input';
import { ProductCreateWithoutTypesInput } from './product-create-without-types.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutTypesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutTypesInput, {nullable:false})
    update!: ProductUpdateWithoutTypesInput;

    @Field(() => ProductCreateWithoutTypesInput, {nullable:false})
    create!: ProductCreateWithoutTypesInput;
}
