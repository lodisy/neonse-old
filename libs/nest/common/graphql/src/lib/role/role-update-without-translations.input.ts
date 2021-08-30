import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { UserUpdateOneWithoutRolesInput } from '../user/user-update-one-without-roles.input';
import { ChannelUpdateManyWithoutRoleInput } from '../channel/channel-update-many-without-role.input';
import { PermissionUpdateManyWithoutRoleInput } from '../permission/permission-update-many-without-role.input';

@InputType()
export class RoleUpdateWithoutTranslationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isDefault?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutRolesInput, {nullable:true})
    user?: UserUpdateOneWithoutRolesInput;

    @Field(() => ChannelUpdateManyWithoutRoleInput, {nullable:true})
    channels?: ChannelUpdateManyWithoutRoleInput;

    @Field(() => PermissionUpdateManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutRoleInput;
}
