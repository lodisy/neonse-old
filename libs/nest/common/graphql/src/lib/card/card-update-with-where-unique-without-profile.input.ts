import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutProfileInput } from './card-update-without-profile.input';

@InputType()
export class CardUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardUpdateWithoutProfileInput, {nullable:false})
    data!: CardUpdateWithoutProfileInput;
}
