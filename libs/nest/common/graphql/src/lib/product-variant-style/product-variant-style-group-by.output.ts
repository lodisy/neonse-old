import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantStyleCountAggregate } from './product-variant-style-count-aggregate.output';
import { ProductVariantStyleMinAggregate } from './product-variant-style-min-aggregate.output';
import { ProductVariantStyleMaxAggregate } from './product-variant-style-max-aggregate.output';

@ObjectType()
export class ProductVariantStyleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => ProductVariantStyleCountAggregate, {nullable:true})
    _count?: ProductVariantStyleCountAggregate;

    @Field(() => ProductVariantStyleMinAggregate, {nullable:true})
    _min?: ProductVariantStyleMinAggregate;

    @Field(() => ProductVariantStyleMaxAggregate, {nullable:true})
    _max?: ProductVariantStyleMaxAggregate;
}
