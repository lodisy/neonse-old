import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LocaleWhereInput {

    @Field(() => [LocaleWhereInput], {nullable:true})
    AND?: Array<LocaleWhereInput>;

    @Field(() => [LocaleWhereInput], {nullable:true})
    OR?: Array<LocaleWhereInput>;

    @Field(() => [LocaleWhereInput], {nullable:true})
    NOT?: Array<LocaleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;
}
