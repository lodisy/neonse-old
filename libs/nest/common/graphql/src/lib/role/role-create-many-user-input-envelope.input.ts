import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateManyUserInput } from './role-create-many-user.input';

@InputType()
export class RoleCreateManyUserInputEnvelope {

    @Field(() => [RoleCreateManyUserInput], {nullable:false})
    data!: Array<RoleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
