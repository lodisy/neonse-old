import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumFileTypeFieldUpdateOperationsInput } from '../prisma/enum-file-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';
import { SourceUpdateOneWithoutFileInput } from '../source/source-update-one-without-file.input';
import { ProfileUpdateOneWithoutAvatarInput } from '../profile/profile-update-one-without-avatar.input';
import { OrderItemUpdateManyWithoutImageInput } from '../order-item/order-item-update-many-without-image.input';
import { ProductUpdateOneWithoutAssetsInput } from '../product/product-update-one-without-assets.input';
import { ProductVariantUpdateOneWithoutAssetsInput } from '../product-variant/product-variant-update-one-without-assets.input';
import { ProductVariantStyleUpdateManyWithoutAssetInput } from '../product-variant-style/product-variant-style-update-many-without-asset.input';
import { ReviewUpdateOneWithoutUploadsInput } from '../review/review-update-one-without-uploads.input';

@InputType()
export class FileUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    alt?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    caption?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumFileTypeFieldUpdateOperationsInput, {nullable:true})
    format?: EnumFileTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mimeType?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    size?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    width?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    height?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    autoPlay?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => SourceUpdateOneWithoutFileInput, {nullable:true})
    source?: SourceUpdateOneWithoutFileInput;

    @Field(() => ProfileUpdateOneWithoutAvatarInput, {nullable:true})
    profileAvatar?: ProfileUpdateOneWithoutAvatarInput;

    @Field(() => OrderItemUpdateManyWithoutImageInput, {nullable:true})
    OrderItem?: OrderItemUpdateManyWithoutImageInput;

    @Field(() => ProductUpdateOneWithoutAssetsInput, {nullable:true})
    Product?: ProductUpdateOneWithoutAssetsInput;

    @Field(() => ProductVariantUpdateOneWithoutAssetsInput, {nullable:true})
    ProductVariant?: ProductVariantUpdateOneWithoutAssetsInput;

    @Field(() => ProductVariantStyleUpdateManyWithoutAssetInput, {nullable:true})
    ProductVariantStyle?: ProductVariantStyleUpdateManyWithoutAssetInput;

    @Field(() => ReviewUpdateOneWithoutUploadsInput, {nullable:true})
    Review?: ReviewUpdateOneWithoutUploadsInput;
}
