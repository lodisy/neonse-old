import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBrandsInput } from './product-create-without-brands.input';
import { ProductCreateOrConnectWithoutBrandsInput } from './product-create-or-connect-without-brands.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutBrandsInput {

    @Field(() => [ProductCreateWithoutBrandsInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandsInput>;

    @Field(() => [ProductCreateOrConnectWithoutBrandsInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
