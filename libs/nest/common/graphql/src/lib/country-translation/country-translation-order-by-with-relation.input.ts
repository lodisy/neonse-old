import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';

@InputType()
export class CountryTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}
