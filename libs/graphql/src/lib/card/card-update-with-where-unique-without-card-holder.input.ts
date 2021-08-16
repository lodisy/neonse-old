import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutCardHolderInput } from './card-update-without-card-holder.input';

@InputType()
export class CardUpdateWithWhereUniqueWithoutCardHolderInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardUpdateWithoutCardHolderInput, {nullable:false})
    data!: CardUpdateWithoutCardHolderInput;
}
