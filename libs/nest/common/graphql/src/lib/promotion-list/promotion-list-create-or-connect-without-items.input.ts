import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';
import { PromotionListCreateWithoutItemsInput } from './promotion-list-create-without-items.input';

@InputType()
export class PromotionListCreateOrConnectWithoutItemsInput {

    @Field(() => PromotionListWhereUniqueInput, {nullable:false})
    where!: PromotionListWhereUniqueInput;

    @Field(() => PromotionListCreateWithoutItemsInput, {nullable:false})
    create!: PromotionListCreateWithoutItemsInput;
}
