import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantColorOrderByWithRelationInput } from '../product-variant-color/product-variant-color-order-by-with-relation.input';

@InputType()
export class ProductVariantColorTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductVariantColorOrderByWithRelationInput, {nullable:true})
    ProductVariantColor?: ProductVariantColorOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantColorId?: keyof typeof SortOrder;
}
