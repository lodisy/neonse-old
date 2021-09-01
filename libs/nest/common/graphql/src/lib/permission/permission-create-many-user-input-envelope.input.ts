import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateManyUserInput } from './permission-create-many-user.input';

@InputType()
export class PermissionCreateManyUserInputEnvelope {

    @Field(() => [PermissionCreateManyUserInput], {nullable:false})
    data!: Array<PermissionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
