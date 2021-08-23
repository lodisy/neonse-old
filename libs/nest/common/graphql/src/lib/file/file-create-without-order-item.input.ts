import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SourceCreateNestedOneWithoutFileInput } from '../source/source-create-nested-one-without-file.input';
import { ProfileCreateNestedOneWithoutUploadsInput } from '../profile/profile-create-nested-one-without-uploads.input';
import { ProfileCreateNestedOneWithoutAvatarInput } from '../profile/profile-create-nested-one-without-avatar.input';
import { ProductCreateNestedOneWithoutAssetsInput } from '../product/product-create-nested-one-without-assets.input';
import { ProductVariantCreateNestedOneWithoutAssetsInput } from '../product-variant/product-variant-create-nested-one-without-assets.input';
import { ProductVariantStyleCreateNestedManyWithoutAssetInput } from '../product-variant-style/product-variant-style-create-nested-many-without-asset.input';
import { ReviewCreateNestedOneWithoutUploadsInput } from '../review/review-create-nested-one-without-uploads.input';

@InputType()
export class FileCreateWithoutOrderItemInput {

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

    @Field(() => Boolean, {nullable:true})
    autoPlay?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => SourceCreateNestedOneWithoutFileInput, {nullable:true})
    source?: SourceCreateNestedOneWithoutFileInput;

    @Field(() => ProfileCreateNestedOneWithoutUploadsInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUploadsInput;

    @Field(() => ProfileCreateNestedOneWithoutAvatarInput, {nullable:true})
    profileAvatar?: ProfileCreateNestedOneWithoutAvatarInput;

    @Field(() => ProductCreateNestedOneWithoutAssetsInput, {nullable:true})
    Product?: ProductCreateNestedOneWithoutAssetsInput;

    @Field(() => ProductVariantCreateNestedOneWithoutAssetsInput, {nullable:true})
    ProductVariant?: ProductVariantCreateNestedOneWithoutAssetsInput;

    @Field(() => ProductVariantStyleCreateNestedManyWithoutAssetInput, {nullable:true})
    ProductVariantStyle?: ProductVariantStyleCreateNestedManyWithoutAssetInput;

    @Field(() => ReviewCreateNestedOneWithoutUploadsInput, {nullable:true})
    Review?: ReviewCreateNestedOneWithoutUploadsInput;
}
