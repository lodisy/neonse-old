import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Action } from './action.enum';

@InputType()
export class EnumActionFieldUpdateOperationsInput {

    @Field(() => Action, {nullable:true})
    set?: keyof typeof Action;
}
