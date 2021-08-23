import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileUncheckedCreateNestedManyWithoutReviewInput } from '../file/file-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(1)
    @Validator.Max(5)
    rate!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => FileUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    uploads?: FileUncheckedCreateNestedManyWithoutReviewInput;
}
