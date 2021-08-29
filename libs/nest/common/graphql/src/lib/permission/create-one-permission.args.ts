import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionCreateInput } from './permission-create.input';

@ArgsType()
export class CreateOnePermissionArgs {

    @Field(() => PermissionCreateInput, {nullable:false})
    data!: PermissionCreateInput;
}
