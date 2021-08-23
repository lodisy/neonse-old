import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BytesFieldUpdateOperationsInput {

    @Field(() => String, {nullable:true})
    set?: Buffer;
}
