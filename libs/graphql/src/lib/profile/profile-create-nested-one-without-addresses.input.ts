import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAddressesInput } from './profile-create-without-addresses.input';
import { ProfileCreateOrConnectWithoutAddressesInput } from './profile-create-or-connect-without-addresses.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutAddressesInput {

    @Field(() => ProfileCreateWithoutAddressesInput, {nullable:true})
    create?: ProfileCreateWithoutAddressesInput;

    @Field(() => ProfileCreateOrConnectWithoutAddressesInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}
