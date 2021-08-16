import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileUncheckedCreateNestedManyWithoutReviewInput } from '../file/file-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(1)
    @Validator.Max(5)
    rate!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => FileUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    media?: FileUncheckedCreateNestedManyWithoutReviewInput;
}
