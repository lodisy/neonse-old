import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ChannelCountAggregate } from './channel-count-aggregate.output';
import { ChannelMinAggregate } from './channel-min-aggregate.output';
import { ChannelMaxAggregate } from './channel-max-aggregate.output';

@ObjectType()
export class ChannelGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => LanguageCode, {nullable:false})
    defaultLanguageCode!: keyof typeof LanguageCode;

    @Field(() => CurrencyCode, {nullable:false})
    currencyCode!: keyof typeof CurrencyCode;

    @Field(() => Boolean, {nullable:true})
    priceIncludeTax?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => ChannelCountAggregate, {nullable:true})
    _count?: ChannelCountAggregate;

    @Field(() => ChannelMinAggregate, {nullable:true})
    _min?: ChannelMinAggregate;

    @Field(() => ChannelMaxAggregate, {nullable:true})
    _max?: ChannelMaxAggregate;
}
