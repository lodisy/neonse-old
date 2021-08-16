import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutReviewsInput } from './profile-create-without-reviews.input';

@InputType()
export class ProfileCreateOrConnectWithoutReviewsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutReviewsInput, {nullable:false})
    create!: ProfileCreateWithoutReviewsInput;
}
