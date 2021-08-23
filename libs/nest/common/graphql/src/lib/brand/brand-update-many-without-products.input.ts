import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';
import { BrandCreateOrConnectWithoutProductsInput } from './brand-create-or-connect-without-products.input';
import { BrandUpsertWithWhereUniqueWithoutProductsInput } from './brand-upsert-with-where-unique-without-products.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateWithWhereUniqueWithoutProductsInput } from './brand-update-with-where-unique-without-products.input';
import { BrandUpdateManyWithWhereWithoutProductsInput } from './brand-update-many-with-where-without-products.input';
import { BrandScalarWhereInput } from './brand-scalar-where.input';

@InputType()
export class BrandUpdateManyWithoutProductsInput {

    @Field(() => [BrandCreateWithoutProductsInput], {nullable:true})
    create?: Array<BrandCreateWithoutProductsInput>;

    @Field(() => [BrandCreateOrConnectWithoutProductsInput], {nullable:true})
    connectOrCreate?: Array<BrandCreateOrConnectWithoutProductsInput>;

    @Field(() => [BrandUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    upsert?: Array<BrandUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    connect?: Array<BrandWhereUniqueInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    set?: Array<BrandWhereUniqueInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    disconnect?: Array<BrandWhereUniqueInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    delete?: Array<BrandWhereUniqueInput>;

    @Field(() => [BrandUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    update?: Array<BrandUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [BrandUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    updateMany?: Array<BrandUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    deleteMany?: Array<BrandScalarWhereInput>;
}
