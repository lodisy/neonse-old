import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateManyCountryInput } from './address-create-many-country.input';

@InputType()
export class AddressCreateManyCountryInputEnvelope {

    @Field(() => [AddressCreateManyCountryInput], {nullable:false})
    data!: Array<AddressCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
