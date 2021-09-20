import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationWhereInput } from './product-translation-where.input';
import { ProductTranslationOrderByWithRelationInput } from './product-translation-order-by-with-relation.input';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTranslationCountAggregateInput } from './product-translation-count-aggregate.input';
import { ProductTranslationMinAggregateInput } from './product-translation-min-aggregate.input';
import { ProductTranslationMaxAggregateInput } from './product-translation-max-aggregate.input';

@ArgsType()
export class ProductTranslationAggregateArgs {

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    where?: ProductTranslationWhereInput;

    @Field(() => [ProductTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTranslationOrderByWithRelationInput>;

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductTranslationCountAggregateInput, {nullable:true})
    _count?: ProductTranslationCountAggregateInput;

    @Field(() => ProductTranslationMinAggregateInput, {nullable:true})
    _min?: ProductTranslationMinAggregateInput;

    @Field(() => ProductTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductTranslationMaxAggregateInput;
}
