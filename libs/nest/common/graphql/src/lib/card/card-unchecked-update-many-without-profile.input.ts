import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutProfileInput } from './card-create-without-profile.input';
import { CardCreateOrConnectWithoutProfileInput } from './card-create-or-connect-without-profile.input';
import { CardUpsertWithWhereUniqueWithoutProfileInput } from './card-upsert-with-where-unique-without-profile.input';
import { CardCreateManyProfileInputEnvelope } from './card-create-many-profile-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithWhereUniqueWithoutProfileInput } from './card-update-with-where-unique-without-profile.input';
import { CardUpdateManyWithWhereWithoutProfileInput } from './card-update-many-with-where-without-profile.input';
import { CardScalarWhereInput } from './card-scalar-where.input';

@InputType()
export class CardUncheckedUpdateManyWithoutProfileInput {

    @Field(() => [CardCreateWithoutProfileInput], {nullable:true})
    create?: Array<CardCreateWithoutProfileInput>;

    @Field(() => [CardCreateOrConnectWithoutProfileInput], {nullable:true})
    connectOrCreate?: Array<CardCreateOrConnectWithoutProfileInput>;

    @Field(() => [CardUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    upsert?: Array<CardUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => CardCreateManyProfileInputEnvelope, {nullable:true})
    createMany?: CardCreateManyProfileInputEnvelope;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    connect?: Array<CardWhereUniqueInput>;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    set?: Array<CardWhereUniqueInput>;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    disconnect?: Array<CardWhereUniqueInput>;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    delete?: Array<CardWhereUniqueInput>;

    @Field(() => [CardUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    update?: Array<CardUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [CardUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    updateMany?: Array<CardUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [CardScalarWhereInput], {nullable:true})
    deleteMany?: Array<CardScalarWhereInput>;
}
