import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { FileUncheckedCreateNestedManyWithoutProductInput } from '../file/file-unchecked-create-nested-many-without-product.input';
import { ProductVariantUncheckedCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-unchecked-create-nested-many-without-product.input';
import { LikeUncheckedCreateNestedManyWithoutProductInput } from '../like/like-unchecked-create-nested-many-without-product.input';
import { ReviewUncheckedCreateNestedManyWithoutProductInput } from '../review/review-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutTranslationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:true})
    discription?: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    sold?: number;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => FileUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    assets?: FileUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput;
}
