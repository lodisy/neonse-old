import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input';
import { ProductCreateOrConnectWithoutReviewsInput } from './product-create-or-connect-without-reviews.input';
import { ProductUpsertWithoutReviewsInput } from './product-upsert-without-reviews.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutReviewsInput } from './product-update-without-reviews.input';

@InputType()
export class ProductUpdateOneWithoutReviewsInput {

    @Field(() => ProductCreateWithoutReviewsInput, {nullable:true})
    create?: ProductCreateWithoutReviewsInput;

    @Field(() => ProductCreateOrConnectWithoutReviewsInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput;

    @Field(() => ProductUpsertWithoutReviewsInput, {nullable:true})
    upsert?: ProductUpsertWithoutReviewsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductUpdateWithoutReviewsInput, {nullable:true})
    update?: ProductUpdateWithoutReviewsInput;
}
