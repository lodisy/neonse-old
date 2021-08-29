import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateManyRoleInput } from './permission-create-many-role.input';

@InputType()
export class PermissionCreateManyRoleInputEnvelope {

    @Field(() => [PermissionCreateManyRoleInput], {nullable:false})
    data!: Array<PermissionCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
