import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereInput } from './role-translation-where.input';
import { RoleTranslationOrderByWithRelationInput } from './role-translation-order-by-with-relation.input';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleTranslationCountAggregateInput } from './role-translation-count-aggregate.input';
import { RoleTranslationMinAggregateInput } from './role-translation-min-aggregate.input';
import { RoleTranslationMaxAggregateInput } from './role-translation-max-aggregate.input';

@ArgsType()
export class RoleTranslationAggregateArgs {

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    where?: RoleTranslationWhereInput;

    @Field(() => [RoleTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleTranslationOrderByWithRelationInput>;

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:true})
    cursor?: RoleTranslationWhereUniqueInput;

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
