import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { RoleTranslationUpdateWithoutRoleInput } from './role-translation-update-without-role.input';
import { RoleTranslationCreateWithoutRoleInput } from './role-translation-create-without-role.input';

@InputType()
export class RoleTranslationUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;

    @Field(() => RoleTranslationUpdateWithoutRoleInput, {nullable:false})
    update!: RoleTranslationUpdateWithoutRoleInput;

    @Field(() => RoleTranslationCreateWithoutRoleInput, {nullable:false})
    create!: RoleTranslationCreateWithoutRoleInput;
}
