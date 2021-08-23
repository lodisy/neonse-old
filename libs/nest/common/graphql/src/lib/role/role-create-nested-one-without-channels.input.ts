import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutChannelsInput } from './role-create-without-channels.input';
import { RoleCreateOrConnectWithoutChannelsInput } from './role-create-or-connect-without-channels.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutChannelsInput {

    @Field(() => RoleCreateWithoutChannelsInput, {nullable:true})
    create?: RoleCreateWithoutChannelsInput;

    @Field(() => RoleCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutChannelsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}
