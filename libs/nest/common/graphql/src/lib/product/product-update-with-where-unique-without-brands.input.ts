import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutBrandsInput } from './product-update-without-brands.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutBrandsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutBrandsInput, {nullable:false})
    data!: ProductUpdateWithoutBrandsInput;
}
