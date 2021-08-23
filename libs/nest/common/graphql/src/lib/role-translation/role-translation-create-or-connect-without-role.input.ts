import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { RoleTranslationCreateWithoutRoleInput } from './role-translation-create-without-role.input';

@InputType()
export class RoleTranslationCreateOrConnectWithoutRoleInput {

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;

    @Field(() => RoleTranslationCreateWithoutRoleInput, {nullable:false})
    create!: RoleTranslationCreateWithoutRoleInput;
}
