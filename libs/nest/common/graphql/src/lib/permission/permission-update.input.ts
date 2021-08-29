import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumActionFieldUpdateOperationsInput } from '../prisma/enum-action-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PermissionUpdatefieldsInput } from '../prisma/permission-updatefields.input';
import { RoleUpdateOneRequiredWithoutPermissionsInput } from '../role/role-update-one-required-without-permissions.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumActionFieldUpdateOperationsInput, {nullable:true})
    action?: EnumActionFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    subject?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    inverted?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdatefieldsInput, {nullable:true})
    fields?: PermissionUpdatefieldsInput;

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsInput;
}
