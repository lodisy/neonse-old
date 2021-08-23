import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationWhereInput } from './product-translation-where.input';
import { ProductTranslationOrderByInput } from './product-translation-order-by.input';
import { ProductTranslationScalarFieldEnum } from './product-translation-scalar-field.enum';
import { ProductTranslationScalarWhereWithAggregatesInput } from './product-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductTranslationCountAggregateInput } from './product-translation-count-aggregate.input';
import { ProductTranslationMinAggregateInput } from './product-translation-min-aggregate.input';
import { ProductTranslationMaxAggregateInput } from './product-translation-max-aggregate.input';

@ArgsType()
export class ProductTranslationGroupByArgs {

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    where?: ProductTranslationWhereInput;

    @Field(() => [ProductTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductTranslationOrderByInput>;

    @Field(() => [ProductTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductTranslationScalarFieldEnum>;

    @Field(() => ProductTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductTranslationScalarWhereWithAggregatesInput;

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
