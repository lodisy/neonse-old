import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutChannelsInput } from './role-create-without-channels.input';
import { RoleCreateOrConnectWithoutChannelsInput } from './role-create-or-connect-without-channels.input';
import { RoleUpsertWithoutChannelsInput } from './role-upsert-without-channels.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutChannelsInput } from './role-update-without-channels.input';

@InputType()
export class RoleUpdateOneWithoutChannelsInput {

    @Field(() => RoleCreateWithoutChannelsInput, {nullable:true})
    create?: RoleCreateWithoutChannelsInput;

    @Field(() => RoleCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutChannelsInput;

    @Field(() => RoleUpsertWithoutChannelsInput, {nullable:true})
    upsert?: RoleUpsertWithoutChannelsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoleUpdateWithoutChannelsInput, {nullable:true})
    update?: RoleUpdateWithoutChannelsInput;
}
