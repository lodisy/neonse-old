import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardCreateManyCardHolderInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    number!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:true})
    bank?: string;
}
