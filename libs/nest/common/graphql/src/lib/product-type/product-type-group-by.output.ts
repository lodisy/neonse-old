import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductTypeCountAggregate } from './product-type-count-aggregate.output';
import { ProductTypeMinAggregate } from './product-type-min-aggregate.output';
import { ProductTypeMaxAggregate } from './product-type-max-aggregate.output';

@ObjectType()
export class ProductTypeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => ProductTypeCountAggregate, {nullable:true})
    _count?: ProductTypeCountAggregate;

    @Field(() => ProductTypeMinAggregate, {nullable:true})
    _min?: ProductTypeMinAggregate;

    @Field(() => ProductTypeMaxAggregate, {nullable:true})
    _max?: ProductTypeMaxAggregate;
}
