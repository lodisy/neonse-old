import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutProfileInput } from './card-update-without-profile.input';
import { CardCreateWithoutProfileInput } from './card-create-without-profile.input';

@InputType()
export class CardUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardUpdateWithoutProfileInput, {nullable:false})
    update!: CardUpdateWithoutProfileInput;

    @Field(() => CardCreateWithoutProfileInput, {nullable:false})
    create!: CardCreateWithoutProfileInput;
}
