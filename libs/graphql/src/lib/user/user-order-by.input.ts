import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOrderByInput {

    @HideField()
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @HideField()
    password?: keyof typeof SortOrder;

    @HideField()
    roles?: keyof typeof SortOrder;

    @HideField()
    jwtToken?: keyof typeof SortOrder;

    @HideField()
    resetPasswordToken?: keyof typeof SortOrder;

    @HideField()
    identifierToken?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;
}
