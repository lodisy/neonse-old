import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutChannelsInput } from './role-create-without-channels.input';

@InputType()
export class RoleCreateOrConnectWithoutChannelsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutChannelsInput, {nullable:false})
    create!: RoleCreateWithoutChannelsInput;
}
