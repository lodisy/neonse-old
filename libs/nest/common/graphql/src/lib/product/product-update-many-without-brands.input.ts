import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBrandsInput } from './product-create-without-brands.input';
import { ProductCreateOrConnectWithoutBrandsInput } from './product-create-or-connect-without-brands.input';
import { ProductUpsertWithWhereUniqueWithoutBrandsInput } from './product-upsert-with-where-unique-without-brands.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutBrandsInput } from './product-update-with-where-unique-without-brands.input';
import { ProductUpdateManyWithWhereWithoutBrandsInput } from './product-update-many-with-where-without-brands.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutBrandsInput {

    @Field(() => [ProductCreateWithoutBrandsInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandsInput>;

    @Field(() => [ProductCreateOrConnectWithoutBrandsInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandsInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutBrandsInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutBrandsInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutBrandsInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBrandsInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}
