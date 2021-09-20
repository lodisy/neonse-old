import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCategoryOrderByWithRelationInput } from '../product-category/product-category-order-by-with-relation.input';

@InputType()
export class ProductCategoryTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    productCategory?: ProductCategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productCategoryId?: keyof typeof SortOrder;
}
