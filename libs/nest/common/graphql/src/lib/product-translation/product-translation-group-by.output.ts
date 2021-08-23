import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductTranslationCountAggregate } from './product-translation-count-aggregate.output';
import { ProductTranslationMinAggregate } from './product-translation-min-aggregate.output';
import { ProductTranslationMaxAggregate } from './product-translation-max-aggregate.output';

@ObjectType()
export class ProductTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    discription?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => ProductTranslationCountAggregate, {nullable:true})
    _count?: ProductTranslationCountAggregate;

    @Field(() => ProductTranslationMinAggregate, {nullable:true})
    _min?: ProductTranslationMinAggregate;

    @Field(() => ProductTranslationMaxAggregate, {nullable:true})
    _max?: ProductTranslationMaxAggregate;
}
