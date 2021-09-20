import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantOrderByWithRelationInput } from '../product-variant/product-variant-order-by-with-relation.input';

@InputType()
export class ProductVariantSizeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    productVariant?: ProductVariantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
}
