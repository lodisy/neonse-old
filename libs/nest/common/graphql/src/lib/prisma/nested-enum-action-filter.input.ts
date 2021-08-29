import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Action } from './action.enum';

@InputType()
export class NestedEnumActionFilter {

    @Field(() => Action, {nullable:true})
    equals?: keyof typeof Action;

    @Field(() => [Action], {nullable:true})
    in?: Array<keyof typeof Action>;

    @Field(() => [Action], {nullable:true})
    notIn?: Array<keyof typeof Action>;

    @Field(() => NestedEnumActionFilter, {nullable:true})
    not?: NestedEnumActionFilter;
}
