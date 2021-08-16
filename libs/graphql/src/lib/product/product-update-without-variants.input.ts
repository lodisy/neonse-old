import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ProductUpdateimagesInput } from '../prisma/product-updateimages.input';
import { BrandUpdateManyWithoutProductsInput } from '../brand/brand-update-many-without-products.input';
import { ProductTypeUpdateManyWithoutProductsInput } from '../product-type/product-type-update-many-without-products.input';
import { ProductCategoryUpdateManyWithoutProductsInput } from '../product-category/product-category-update-many-without-products.input';
import { ReviewUpdateManyWithoutForInput } from '../review/review-update-many-without-for.input';
import { LikeUpdateManyWithoutProductInput } from '../like/like-update-many-without-product.input';

@InputType()
export class ProductUpdateWithoutVariantsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sku?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discription?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    featured?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    draft?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sold?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => BrandUpdateManyWithoutProductsInput, {nullable:true})
    brands?: BrandUpdateManyWithoutProductsInput;

    @Field(() => ProductTypeUpdateManyWithoutProductsInput, {nullable:true})
    types?: ProductTypeUpdateManyWithoutProductsInput;

    @Field(() => ProductCategoryUpdateManyWithoutProductsInput, {nullable:true})
    categories?: ProductCategoryUpdateManyWithoutProductsInput;

    @Field(() => ReviewUpdateManyWithoutForInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutForInput;

    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: LikeUpdateManyWithoutProductInput;
}
