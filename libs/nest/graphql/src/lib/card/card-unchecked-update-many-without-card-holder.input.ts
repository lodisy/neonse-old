import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CardCreateWithoutCardHolderInput } from './card-create-without-card-holder.input'
import { CardCreateOrConnectWithoutCardHolderInput } from './card-create-or-connect-without-card-holder.input'
import { CardUpsertWithWhereUniqueWithoutCardHolderInput } from './card-upsert-with-where-unique-without-card-holder.input'
import { CardCreateManyCardHolderInputEnvelope } from './card-create-many-card-holder-input-envelope.input'
import { CardWhereUniqueInput } from './card-where-unique.input'
import { CardUpdateWithWhereUniqueWithoutCardHolderInput } from './card-update-with-where-unique-without-card-holder.input'
import { CardUpdateManyWithWhereWithoutCardHolderInput } from './card-update-many-with-where-without-card-holder.input'
import { CardScalarWhereInput } from './card-scalar-where.input'

@InputType()
export class CardUncheckedUpdateManyWithoutCardHolderInput {
    @Field(() => [CardCreateWithoutCardHolderInput], { nullable: true })
    create?: Array<CardCreateWithoutCardHolderInput>

    @Field(() => [CardCreateOrConnectWithoutCardHolderInput], { nullable: true })
    connectOrCreate?: Array<CardCreateOrConnectWithoutCardHolderInput>

    @Field(() => [CardUpsertWithWhereUniqueWithoutCardHolderInput], { nullable: true })
    upsert?: Array<CardUpsertWithWhereUniqueWithoutCardHolderInput>

    @Field(() => CardCreateManyCardHolderInputEnvelope, { nullable: true })
    createMany?: CardCreateManyCardHolderInputEnvelope

    @Field(() => [CardWhereUniqueInput], { nullable: true })
    connect?: Array<CardWhereUniqueInput>

    @Field(() => [CardWhereUniqueInput], { nullable: true })
    set?: Array<CardWhereUniqueInput>

    @Field(() => [CardWhereUniqueInput], { nullable: true })
    disconnect?: Array<CardWhereUniqueInput>

    @Field(() => [CardWhereUniqueInput], { nullable: true })
    delete?: Array<CardWhereUniqueInput>

    @Field(() => [CardUpdateWithWhereUniqueWithoutCardHolderInput], { nullable: true })
    update?: Array<CardUpdateWithWhereUniqueWithoutCardHolderInput>

    @Field(() => [CardUpdateManyWithWhereWithoutCardHolderInput], { nullable: true })
    updateMany?: Array<CardUpdateManyWithWhereWithoutCardHolderInput>

    @Field(() => [CardScalarWhereInput], { nullable: true })
    deleteMany?: Array<CardScalarWhereInput>
}
