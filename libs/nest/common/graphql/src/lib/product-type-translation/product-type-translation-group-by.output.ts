import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductTypeTranslationCountAggregate } from './product-type-translation-count-aggregate.output';
import { ProductTypeTranslationMinAggregate } from './product-type-translation-min-aggregate.output';
import { ProductTypeTranslationMaxAggregate } from './product-type-translation-max-aggregate.output';

@ObjectType()
export class ProductTypeTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    productTypeId?: string;

    @Field(() => ProductTypeTranslationCountAggregate, {nullable:true})
    _count?: ProductTypeTranslationCountAggregate;

    @Field(() => ProductTypeTranslationMinAggregate, {nullable:true})
    _min?: ProductTypeTranslationMinAggregate;

    @Field(() => ProductTypeTranslationMaxAggregate, {nullable:true})
    _max?: ProductTypeTranslationMaxAggregate;
}
