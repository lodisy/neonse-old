import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';
import { BrandCreateOrConnectWithoutProductsInput } from './brand-create-or-connect-without-products.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandCreateNestedManyWithoutProductsInput {

    @Field(() => [BrandCreateWithoutProductsInput], {nullable:true})
    create?: Array<BrandCreateWithoutProductsInput>;

    @Field(() => [BrandCreateOrConnectWithoutProductsInput], {nullable:true})
    connectOrCreate?: Array<BrandCreateOrConnectWithoutProductsInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    connect?: Array<BrandWhereUniqueInput>;
}
