import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FileUpdateOneRequiredWithoutSourceInput } from '../file/file-update-one-required-without-source.input';

@InputType()
export class SourceUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneRequiredWithoutSourceInput, {nullable:true})
    file?: FileUpdateOneRequiredWithoutSourceInput;
}
