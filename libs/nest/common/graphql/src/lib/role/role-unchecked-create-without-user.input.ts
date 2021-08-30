import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LanguageCode } from '../prisma/language-code.enum';
import { ChannelUncheckedCreateNestedManyWithoutRoleInput } from '../channel/channel-unchecked-create-nested-many-without-role.input';
import { PermissionUncheckedCreateNestedManyWithoutRoleInput } from '../permission/permission-unchecked-create-nested-many-without-role.input';
import { RoleTranslationUncheckedCreateNestedManyWithoutRoleInput } from '../role-translation/role-translation-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(10)
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    description?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ChannelUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    channels?: ChannelUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => RoleTranslationUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    translations?: RoleTranslationUncheckedCreateNestedManyWithoutRoleInput;
}
