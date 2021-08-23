import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { RoleTranslationCountAggregate } from './role-translation-count-aggregate.output';
import { RoleTranslationMinAggregate } from './role-translation-min-aggregate.output';
import { RoleTranslationMaxAggregate } from './role-translation-max-aggregate.output';

@ObjectType()
export class RoleTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => RoleTranslationCountAggregate, {nullable:true})
    _count?: RoleTranslationCountAggregate;

    @Field(() => RoleTranslationMinAggregate, {nullable:true})
    _min?: RoleTranslationMinAggregate;

    @Field(() => RoleTranslationMaxAggregate, {nullable:true})
    _max?: RoleTranslationMaxAggregate;
}
