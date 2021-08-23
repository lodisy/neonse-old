import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationWhereInput } from './role-translation-where.input';

@InputType()
export class RoleTranslationListRelationFilter {

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    every?: RoleTranslationWhereInput;

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    some?: RoleTranslationWhereInput;

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    none?: RoleTranslationWhereInput;
}
