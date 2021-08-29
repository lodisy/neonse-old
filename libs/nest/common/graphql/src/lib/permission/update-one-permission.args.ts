import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateInput } from './permission-update.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@ArgsType()
export class UpdateOnePermissionArgs {

    @Field(() => PermissionUpdateInput, {nullable:false})
    data!: PermissionUpdateInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;
}
