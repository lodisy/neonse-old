import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permission } from './permission.enum';

@InputType()
export class RoleCreatepermissionsInput {

    @Field(() => [Permission], {nullable:false})
    set!: Array<keyof typeof Permission>;
}
