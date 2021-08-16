import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumFileTypeFieldUpdateOperationsInput } from '../prisma/enum-file-type-field-update-operations.input';
import { BytesFieldUpdateOperationsInput } from '../prisma/bytes-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SourceUpdateOneWithoutFileInput } from '../source/source-update-one-without-file.input';
import { ProfileUpdateOneWithoutUploadsInput } from '../profile/profile-update-one-without-uploads.input';
import { ReviewUpdateOneWithoutMediaInput } from '../review/review-update-one-without-media.input';

@InputType()
export class FileUpdateWithoutProfileAvatarInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    alt?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    caption?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumFileTypeFieldUpdateOperationsInput, {nullable:true})
    format?: EnumFileTypeFieldUpdateOperationsInput;

    @Field(() => BytesFieldUpdateOperationsInput, {nullable:true})
    size?: BytesFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    width?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    height?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    autoPlay?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SourceUpdateOneWithoutFileInput, {nullable:true})
    source?: SourceUpdateOneWithoutFileInput;

    @Field(() => ProfileUpdateOneWithoutUploadsInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUploadsInput;

    @Field(() => ReviewUpdateOneWithoutMediaInput, {nullable:true})
    review?: ReviewUpdateOneWithoutMediaInput;
}
