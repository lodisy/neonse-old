import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from '../prisma/product-createimages.input';
import { ProductVariantUncheckedCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-unchecked-create-nested-many-without-product.input';
import { ReviewUncheckedCreateNestedManyWithoutForInput } from '../review/review-unchecked-create-nested-many-without-for.input';

@InputType()
export class ProductUncheckedCreateWithoutLikesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    discription!: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutForInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutForInput;
}
