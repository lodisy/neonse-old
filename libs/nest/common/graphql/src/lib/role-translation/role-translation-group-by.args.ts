import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereInput } from './role-translation-where.input';
import { RoleTranslationOrderByWithAggregationInput } from './role-translation-order-by-with-aggregation.input';
import { RoleTranslationScalarFieldEnum } from './role-translation-scalar-field.enum';
import { RoleTranslationScalarWhereWithAggregatesInput } from './role-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RoleTranslationCountAggregateInput } from './role-translation-count-aggregate.input';
import { RoleTranslationMinAggregateInput } from './role-translation-min-aggregate.input';
import { RoleTranslationMaxAggregateInput } from './role-translation-max-aggregate.input';

@ArgsType()
export class RoleTranslationGroupByArgs {

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    where?: RoleTranslationWhereInput;

    @Field(() => [RoleTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RoleTranslationOrderByWithAggregationInput>;

    @Field(() => [RoleTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RoleTranslationScalarFieldEnum>;

    @Field(() => RoleTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: RoleTranslationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoleTranslationCountAggregateInput, {nullable:true})
    _count?: RoleTranslationCountAggregateInput;

    @Field(() => RoleTranslationMinAggregateInput, {nullable:true})
    _min?: RoleTranslationMinAggregateInput;

    @Field(() => RoleTranslationMaxAggregateInput, {nullable:true})
    _max?: RoleTranslationMaxAggregateInput;
}
