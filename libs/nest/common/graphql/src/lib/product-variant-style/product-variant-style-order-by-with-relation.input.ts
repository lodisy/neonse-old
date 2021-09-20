import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { ProductVariantStyleTranslationOrderByRelationAggregateInput } from '../product-variant-style-translation/product-variant-style-translation-order-by-relation-aggregate.input';
import { ProductVariantOrderByWithRelationInput } from '../product-variant/product-variant-order-by-with-relation.input';

@InputType()
export class ProductVariantStyleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    asset?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductVariantStyleTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductVariantStyleTranslationOrderByRelationAggregateInput;

    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    productVariant?: ProductVariantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
}
