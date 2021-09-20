import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantOrderByWithRelationInput } from '../product-variant/product-variant-order-by-with-relation.input';

@InputType()
export class ProductVariantTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    ProductVariant?: ProductVariantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
}
