import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutProfileInput } from './card-create-without-profile.input';
import { CardCreateOrConnectWithoutProfileInput } from './card-create-or-connect-without-profile.input';
import { CardCreateManyProfileInputEnvelope } from './card-create-many-profile-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [CardCreateWithoutProfileInput], {nullable:true})
    create?: Array<CardCreateWithoutProfileInput>;

    @Field(() => [CardCreateOrConnectWithoutProfileInput], {nullable:true})
    connectOrCreate?: Array<CardCreateOrConnectWithoutProfileInput>;

    @Field(() => CardCreateManyProfileInputEnvelope, {nullable:true})
    createMany?: CardCreateManyProfileInputEnvelope;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    connect?: Array<CardWhereUniqueInput>;
}
