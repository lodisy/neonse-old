import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantStyleOrderByWithRelationInput } from '../product-variant-style/product-variant-style-order-by-with-relation.input';

@InputType()
export class ProductVariantStyleTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductVariantStyleOrderByWithRelationInput, {nullable:true})
    productVariantStyle?: ProductVariantStyleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantStyleId?: keyof typeof SortOrder;
}
