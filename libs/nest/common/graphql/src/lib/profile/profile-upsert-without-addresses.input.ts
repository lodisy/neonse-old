import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutAddressesInput } from './profile-update-without-addresses.input';
import { ProfileCreateWithoutAddressesInput } from './profile-create-without-addresses.input';

@InputType()
export class ProfileUpsertWithoutAddressesInput {

    @Field(() => ProfileUpdateWithoutAddressesInput, {nullable:false})
    update!: ProfileUpdateWithoutAddressesInput;

    @Field(() => ProfileCreateWithoutAddressesInput, {nullable:false})
    create!: ProfileCreateWithoutAddressesInput;
}
