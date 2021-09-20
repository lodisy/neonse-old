import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShippingMethodOrderByWithRelationInput } from '../shipping-method/shipping-method-order-by-with-relation.input';

@InputType()
export class ShippingMethodTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ShippingMethodOrderByWithRelationInput, {nullable:true})
    shippingMethod?: ShippingMethodOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    shippingMethodId?: keyof typeof SortOrder;
}
