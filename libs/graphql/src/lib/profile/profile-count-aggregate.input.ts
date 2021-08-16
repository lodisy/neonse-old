import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProfileCountAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    point?: true;

    @Field(() => Boolean, {nullable:true})
    level?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
