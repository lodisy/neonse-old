import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutBrandsInput } from './product-update-without-brands.input';
import { ProductCreateWithoutBrandsInput } from './product-create-without-brands.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutBrandsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutBrandsInput, {nullable:false})
    update!: ProductUpdateWithoutBrandsInput;

    @Field(() => ProductCreateWithoutBrandsInput, {nullable:false})
    create!: ProductCreateWithoutBrandsInput;
}
