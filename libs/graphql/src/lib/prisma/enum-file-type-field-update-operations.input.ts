import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from './file-type.enum';

@InputType()
export class EnumFileTypeFieldUpdateOperationsInput {

    @Field(() => FileType, {nullable:true})
    set?: keyof typeof FileType;
}
