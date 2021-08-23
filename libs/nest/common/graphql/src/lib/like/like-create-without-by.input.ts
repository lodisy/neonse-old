import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentType } from '../prisma/content-type.enum';
import { ProductCreateNestedOneWithoutLikesInput } from '../product/product-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContentType, {nullable:false})
    type!: keyof typeof ContentType;

    @Field(() => ProductCreateNestedOneWithoutLikesInput, {nullable:true})
    product?: ProductCreateNestedOneWithoutLikesInput;
}
