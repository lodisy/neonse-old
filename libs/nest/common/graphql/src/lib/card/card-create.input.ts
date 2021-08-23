import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutCardsInput } from '../profile/profile-create-nested-one-without-cards.input';

@InputType()
export class CardCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    number!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:true})
    bank?: string;

    @Field(() => ProfileCreateNestedOneWithoutCardsInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutCardsInput;
}
