import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { ProductVariantSizeOrderByWithRelationInput } from '../product-variant-size/product-variant-size-order-by-with-relation.input';
import { ProductVariantColorOrderByWithRelationInput } from '../product-variant-color/product-variant-color-order-by-with-relation.input';
import { ProductVariantStyleOrderByWithRelationInput } from '../product-variant-style/product-variant-style-order-by-with-relation.input';
import { ChannelOrderByRelationAggregateInput } from '../channel/channel-order-by-relation-aggregate.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { ProductVariantTranslationOrderByRelationAggregateInput } from '../product-variant-translation/product-variant-translation-order-by-relation-aggregate.input';

@InputType()
export class ProductVariantOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    assets?: FileOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    brands?: keyof typeof SortOrder;

    @Field(() => ProductVariantSizeOrderByWithRelationInput, {nullable:true})
    size?: ProductVariantSizeOrderByWithRelationInput;

    @Field(() => ProductVariantColorOrderByWithRelationInput, {nullable:true})
    color?: ProductVariantColorOrderByWithRelationInput;

    @Field(() => ProductVariantStyleOrderByWithRelationInput, {nullable:true})
    style?: ProductVariantStyleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    currencyCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold?: keyof typeof SortOrder;

    @Field(() => ChannelOrderByRelationAggregateInput, {nullable:true})
    channels?: ChannelOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    draft?: keyof typeof SortOrder;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductVariantTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductVariantTranslationOrderByRelationAggregateInput;
}
