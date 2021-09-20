import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductTypeOrderByWithRelationInput } from '../product-type/product-type-order-by-with-relation.input';

@InputType()
export class ProductTypeTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductTypeOrderByWithRelationInput, {nullable:true})
    productType?: ProductTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productTypeId?: keyof typeof SortOrder;
}
