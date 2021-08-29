import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateManyMutationInput } from './permission-update-many-mutation.input';
import { PermissionWhereInput } from './permission-where.input';

@ArgsType()
export class UpdateManyPermissionArgs {

    @Field(() => PermissionUpdateManyMutationInput, {nullable:false})
    data!: PermissionUpdateManyMutationInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    where?: PermissionWhereInput;
}
