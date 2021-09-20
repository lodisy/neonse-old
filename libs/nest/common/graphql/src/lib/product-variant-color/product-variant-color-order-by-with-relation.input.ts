import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantColorTranslationOrderByRelationAggregateInput } from '../product-variant-color-translation/product-variant-color-translation-order-by-relation-aggregate.input';
import { ProductVariantOrderByWithRelationInput } from '../product-variant/product-variant-order-by-with-relation.input';

@InputType()
export class ProductVariantColorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductVariantColorTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductVariantColorTranslationOrderByRelationAggregateInput;

    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    productVariant?: ProductVariantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
}
