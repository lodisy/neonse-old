import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutLikesInput } from './product-create-without-likes.input';
import { ProductCreateOrConnectWithoutLikesInput } from './product-create-or-connect-without-likes.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutLikesInput {

    @Field(() => ProductCreateWithoutLikesInput, {nullable:true})
    create?: ProductCreateWithoutLikesInput;

    @Field(() => ProductCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutLikesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;
}
