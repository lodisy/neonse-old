import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryCountAggregate } from './product-category-count-aggregate.output';
import { ProductCategoryMinAggregate } from './product-category-min-aggregate.output';
import { ProductCategoryMaxAggregate } from './product-category-max-aggregate.output';

@ObjectType()
export class ProductCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: ProductCategoryCountAggregate;

    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: ProductCategoryMinAggregate;

    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: ProductCategoryMaxAggregate;
}
