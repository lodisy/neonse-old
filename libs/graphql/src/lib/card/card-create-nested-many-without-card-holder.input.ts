import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCardHolderInput } from './card-create-without-card-holder.input';
import { CardCreateOrConnectWithoutCardHolderInput } from './card-create-or-connect-without-card-holder.input';
import { CardCreateManyCardHolderInputEnvelope } from './card-create-many-card-holder-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedManyWithoutCardHolderInput {

    @Field(() => [CardCreateWithoutCardHolderInput], {nullable:true})
    create?: Array<CardCreateWithoutCardHolderInput>;

    @Field(() => [CardCreateOrConnectWithoutCardHolderInput], {nullable:true})
    connectOrCreate?: Array<CardCreateOrConnectWithoutCardHolderInput>;

    @Field(() => CardCreateManyCardHolderInputEnvelope, {nullable:true})
    createMany?: CardCreateManyCardHolderInputEnvelope;

    @Field(() => [CardWhereUniqueInput], {nullable:true})
    connect?: Array<CardWhereUniqueInput>;
}
