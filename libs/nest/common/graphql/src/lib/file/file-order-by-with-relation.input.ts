import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SourceOrderByWithRelationInput } from '../source/source-order-by-with-relation.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { ProductVariantOrderByWithRelationInput } from '../product-variant/product-variant-order-by-with-relation.input';
import { ProductVariantStyleOrderByRelationAggregateInput } from '../product-variant-style/product-variant-style-order-by-relation-aggregate.input';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caption?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mimeType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SourceOrderByWithRelationInput, {nullable:true})
    source?: SourceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    autoPlay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profileAvatar?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileAvatarId?: keyof typeof SortOrder;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    OrderItem?: OrderItemOrderByRelationAggregateInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    Product?: ProductOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    ProductVariant?: ProductVariantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => ProductVariantStyleOrderByRelationAggregateInput, {nullable:true})
    ProductVariantStyle?: ProductVariantStyleOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    Review?: ReviewOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}
