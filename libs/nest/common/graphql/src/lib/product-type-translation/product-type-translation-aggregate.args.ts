import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';
import { ProductTypeTranslationOrderByInput } from './product-type-translation-order-by.input';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeTranslationCountAggregateInput } from './product-type-translation-count-aggregate.input';
import { ProductTypeTranslationMinAggregateInput } from './product-type-translation-min-aggregate.input';
import { ProductTypeTranslationMaxAggregateInput } from './product-type-translation-max-aggregate.input';

@ArgsType()
export class ProductTypeTranslationAggregateArgs {

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    where?: ProductTypeTranslationWhereInput;

    @Field(() => [ProductTypeTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductTypeTranslationOrderByInput>;

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductTypeTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductTypeTranslationCountAggregateInput, {nullable:true})
    _count?: ProductTypeTranslationCountAggregateInput;

    @Field(() => ProductTypeTranslationMinAggregateInput, {nullable:true})
    _min?: ProductTypeTranslationMinAggregateInput;

    @Field(() => ProductTypeTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductTypeTranslationMaxAggregateInput;
}
