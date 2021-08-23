import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permission } from './permission.enum';

@InputType()
export class RoleUpdatepermissionsInput {

    @Field(() => [Permission], {nullable:true})
    set?: Array<keyof typeof Permission>;

    @Field(() => [Permission], {nullable:true})
    push?: Array<keyof typeof Permission>;
}
