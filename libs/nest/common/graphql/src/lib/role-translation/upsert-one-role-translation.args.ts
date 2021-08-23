import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { RoleTranslationCreateInput } from './role-translation-create.input';
import { RoleTranslationUpdateInput } from './role-translation-update.input';

@ArgsType()
export class UpsertOneRoleTranslationArgs {

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;

    @Field(() => RoleTranslationCreateInput, {nullable:false})
    create!: RoleTranslationCreateInput;

    @Field(() => RoleTranslationUpdateInput, {nullable:false})
    update!: RoleTranslationUpdateInput;
}
