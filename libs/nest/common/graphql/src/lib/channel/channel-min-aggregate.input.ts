import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChannelMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    token?: true;

    @Field(() => Boolean, {nullable:true})
    defaultLanguageCode?: true;

    @Field(() => Boolean, {nullable:true})
    currencyCode?: true;

    @Field(() => Boolean, {nullable:true})
    priceIncludeTax?: true;

    @Field(() => Boolean, {nullable:true})
    productVariantId?: true;

    @Field(() => Boolean, {nullable:true})
    roleId?: true;
}
