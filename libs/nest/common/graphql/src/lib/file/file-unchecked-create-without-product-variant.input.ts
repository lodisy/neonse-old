import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderItemUncheckedCreateNestedManyWithoutImageInput } from '../order-item/order-item-unchecked-create-nested-many-without-image.input';
import { ProductVariantStyleUncheckedCreateNestedManyWithoutAssetInput } from '../product-variant-style/product-variant-style-unchecked-create-nested-many-without-asset.input';

@InputType()
export class FileUncheckedCreateWithoutProductVariantInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl()
    url!: string;

    @Field(() => String, {nullable:true})
    alt?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => FileType, {nullable:false})
    format!: keyof typeof FileType;

    @Field(() => String, {nullable:false})
    @Validator.IsMimeType()
    mimeType!: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => Boolean, {nullable:true})
    autoPlay?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:true})
    profileAvatarId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    reviewId?: string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutImageInput, {nullable:true})
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutImageInput;

    @Field(() => ProductVariantStyleUncheckedCreateNestedManyWithoutAssetInput, {nullable:true})
    ProductVariantStyle?: ProductVariantStyleUncheckedCreateNestedManyWithoutAssetInput;
}
