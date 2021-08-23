import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RefundWhereInput {

    @Field(() => [RefundWhereInput], {nullable:true})
    AND?: Array<RefundWhereInput>;

    @Field(() => [RefundWhereInput], {nullable:true})
    OR?: Array<RefundWhereInput>;

    @Field(() => [RefundWhereInput], {nullable:true})
    NOT?: Array<RefundWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;
}
