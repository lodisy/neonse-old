import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutCardsInput } from './profile-create-without-cards.input';
import { ProfileCreateOrConnectWithoutCardsInput } from './profile-create-or-connect-without-cards.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutCardsInput {

    @Field(() => ProfileCreateWithoutCardsInput, {nullable:true})
    create?: ProfileCreateWithoutCardsInput;

    @Field(() => ProfileCreateOrConnectWithoutCardsInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutCardsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}
