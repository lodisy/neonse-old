import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodCountAggregate } from './shipping-method-count-aggregate.output';
import { ShippingMethodMinAggregate } from './shipping-method-min-aggregate.output';
import { ShippingMethodMaxAggregate } from './shipping-method-max-aggregate.output';

@ObjectType()
export class ShippingMethodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => ShippingMethodCountAggregate, {nullable:true})
    _count?: ShippingMethodCountAggregate;

    @Field(() => ShippingMethodMinAggregate, {nullable:true})
    _min?: ShippingMethodMinAggregate;

    @Field(() => ShippingMethodMaxAggregate, {nullable:true})
    _max?: ShippingMethodMaxAggregate;
}
