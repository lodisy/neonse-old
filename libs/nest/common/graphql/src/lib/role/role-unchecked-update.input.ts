import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ChannelUncheckedUpdateManyWithoutRoleInput } from '../channel/channel-unchecked-update-many-without-role.input';
import { PermissionUncheckedUpdateManyWithoutRoleInput } from '../permission/permission-unchecked-update-many-without-role.input';
import { RoleTranslationUncheckedUpdateManyWithoutRoleInput } from '../role-translation/role-translation-unchecked-update-many-without-role.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => ChannelUncheckedUpdateManyWithoutRoleInput, {nullable:true})
    channels?: ChannelUncheckedUpdateManyWithoutRoleInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutRoleInput;

    @Field(() => RoleTranslationUncheckedUpdateManyWithoutRoleInput, {nullable:true})
    translations?: RoleTranslationUncheckedUpdateManyWithoutRoleInput;
}
