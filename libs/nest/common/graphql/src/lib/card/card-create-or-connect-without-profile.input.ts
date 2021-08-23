import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutProfileInput } from './card-create-without-profile.input';

@InputType()
export class CardCreateOrConnectWithoutProfileInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardCreateWithoutProfileInput, {nullable:false})
    create!: CardCreateWithoutProfileInput;
}
