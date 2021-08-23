import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryCreateManyInput } from './country-create-many.input';

@ArgsType()
export class CreateManyCountryArgs {

    @Field(() => [CountryCreateManyInput], {nullable:false})
    data!: Array<CountryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
