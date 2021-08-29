import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionCreateInput } from './permission-create.input';
import { PermissionUpdateInput } from './permission-update.input';

@ArgsType()
export class UpsertOnePermissionArgs {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateInput, {nullable:false})
    create!: PermissionCreateInput;

    @Field(() => PermissionUpdateInput, {nullable:false})
    update!: PermissionUpdateInput;
}
