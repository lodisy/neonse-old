import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutReviewsInput } from './profile-create-without-reviews.input';
import { ProfileCreateOrConnectWithoutReviewsInput } from './profile-create-or-connect-without-reviews.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutReviewsInput {

    @Field(() => ProfileCreateWithoutReviewsInput, {nullable:true})
    create?: ProfileCreateWithoutReviewsInput;

    @Field(() => ProfileCreateOrConnectWithoutReviewsInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}
