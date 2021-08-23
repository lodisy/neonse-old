import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { RoleTranslationUpdateWithoutRoleInput } from './role-translation-update-without-role.input';

@InputType()
export class RoleTranslationUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;

    @Field(() => RoleTranslationUpdateWithoutRoleInput, {nullable:false})
    data!: RoleTranslationUpdateWithoutRoleInput;
}
