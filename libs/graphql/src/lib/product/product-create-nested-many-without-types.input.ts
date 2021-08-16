import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutTypesInput } from './product-create-without-types.input';
import { ProductCreateOrConnectWithoutTypesInput } from './product-create-or-connect-without-types.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutTypesInput {

    @Field(() => [ProductCreateWithoutTypesInput], {nullable:true})
    create?: Array<ProductCreateWithoutTypesInput>;

    @Field(() => [ProductCreateOrConnectWithoutTypesInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutTypesInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
