import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BrandOrderByWithRelationInput } from '../brand/brand-order-by-with-relation.input';

@InputType()
export class BrandTranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => BrandOrderByWithRelationInput, {nullable:true})
    brand?: BrandOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    brandId?: keyof typeof SortOrder;
}
