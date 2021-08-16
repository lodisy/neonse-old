import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@ArgsType()
export class FindUniqueAddressArgs {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;
}
