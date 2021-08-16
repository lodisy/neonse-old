import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class GuestWhereInput {

    @Field(() => [GuestWhereInput], {nullable:true})
    AND?: Array<GuestWhereInput>;

    @Field(() => [GuestWhereInput], {nullable:true})
    OR?: Array<GuestWhereInput>;

    @Field(() => [GuestWhereInput], {nullable:true})
    NOT?: Array<GuestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifierToken?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;
}
