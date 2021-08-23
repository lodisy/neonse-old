import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorCountAggregate } from './product-variant-color-count-aggregate.output';
import { ProductVariantColorMinAggregate } from './product-variant-color-min-aggregate.output';
import { ProductVariantColorMaxAggregate } from './product-variant-color-max-aggregate.output';

@ObjectType()
export class ProductVariantColorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => ProductVariantColorCountAggregate, {nullable:true})
    _count?: ProductVariantColorCountAggregate;

    @Field(() => ProductVariantColorMinAggregate, {nullable:true})
    _min?: ProductVariantColorMinAggregate;

    @Field(() => ProductVariantColorMaxAggregate, {nullable:true})
    _max?: ProductVariantColorMaxAggregate;
}
