import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoleTranslationCountAggregate } from './role-translation-count-aggregate.output';
import { RoleTranslationMinAggregate } from './role-translation-min-aggregate.output';
import { RoleTranslationMaxAggregate } from './role-translation-max-aggregate.output';

@ObjectType()
export class AggregateRoleTranslation {

    @Field(() => RoleTranslationCountAggregate, {nullable:true})
    _count?: RoleTranslationCountAggregate;

    @Field(() => RoleTranslationMinAggregate, {nullable:true})
    _min?: RoleTranslationMinAggregate;

    @Field(() => RoleTranslationMaxAggregate, {nullable:true})
    _max?: RoleTranslationMaxAggregate;
}
