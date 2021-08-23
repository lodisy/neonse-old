import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutChannelsInput } from './role-update-without-channels.input';
import { RoleCreateWithoutChannelsInput } from './role-create-without-channels.input';

@InputType()
export class RoleUpsertWithoutChannelsInput {

    @Field(() => RoleUpdateWithoutChannelsInput, {nullable:false})
    update!: RoleUpdateWithoutChannelsInput;

    @Field(() => RoleCreateWithoutChannelsInput, {nullable:false})
    create!: RoleCreateWithoutChannelsInput;
}
