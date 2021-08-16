import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleStatus } from './role-status.enum';

@InputType()
export class EnumRoleStatusFieldUpdateOperationsInput {

    @Field(() => RoleStatus, {nullable:true})
    set?: keyof typeof RoleStatus;
}
