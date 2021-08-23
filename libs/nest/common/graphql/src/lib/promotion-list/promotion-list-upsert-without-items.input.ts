import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionListUpdateWithoutItemsInput } from './promotion-list-update-without-items.input';
import { PromotionListCreateWithoutItemsInput } from './promotion-list-create-without-items.input';

@InputType()
export class PromotionListUpsertWithoutItemsInput {

    @Field(() => PromotionListUpdateWithoutItemsInput, {nullable:false})
    update!: PromotionListUpdateWithoutItemsInput;

    @Field(() => PromotionListCreateWithoutItemsInput, {nullable:false})
    create!: PromotionListCreateWithoutItemsInput;
}
