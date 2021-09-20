import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereInput } from './country-translation-where.input';
import { CountryTranslationOrderByWithRelationInput } from './country-translation-order-by-with-relation.input';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryTranslationScalarFieldEnum } from './country-translation-scalar-field.enum';

@ArgsType()
export class FindManyCountryTranslationArgs {

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    where?: CountryTranslationWhereInput;

    @Field(() => [CountryTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryTranslationOrderByWithRelationInput>;

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:true})
    cursor?: CountryTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CountryTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryTranslationScalarFieldEnum>;
}
