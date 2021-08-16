import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutLikesInput } from './product-create-without-likes.input';

@InputType()
export class ProductCreateOrConnectWithoutLikesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutLikesInput, {nullable:false})
    create!: ProductCreateWithoutLikesInput;
}
