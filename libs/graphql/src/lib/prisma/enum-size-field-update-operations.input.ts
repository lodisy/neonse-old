import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Size } from './size.enum';

@InputType()
export class EnumSizeFieldUpdateOperationsInput {

    @Field(() => Size, {nullable:true})
    set?: keyof typeof Size;
}
