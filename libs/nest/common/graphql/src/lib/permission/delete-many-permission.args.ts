import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';

@ArgsType()
export class DeleteManyPermissionArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    where?: PermissionWhereInput;
}
