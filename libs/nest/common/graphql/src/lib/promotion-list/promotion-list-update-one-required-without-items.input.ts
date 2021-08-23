import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionListCreateWithoutItemsInput } from './promotion-list-create-without-items.input';
import { PromotionListCreateOrConnectWithoutItemsInput } from './promotion-list-create-or-connect-without-items.input';
import { PromotionListUpsertWithoutItemsInput } from './promotion-list-upsert-without-items.input';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';
import { PromotionListUpdateWithoutItemsInput } from './promotion-list-update-without-items.input';

@InputType()
export class PromotionListUpdateOneRequiredWithoutItemsInput {

    @Field(() => PromotionListCreateWithoutItemsInput, {nullable:true})
    create?: PromotionListCreateWithoutItemsInput;

    @Field(() => PromotionListCreateOrConnectWithoutItemsInput, {nullable:true})
    connectOrCreate?: PromotionListCreateOrConnectWithoutItemsInput;

    @Field(() => PromotionListUpsertWithoutItemsInput, {nullable:true})
    upsert?: PromotionListUpsertWithoutItemsInput;

    @Field(() => PromotionListWhereUniqueInput, {nullable:true})
    connect?: PromotionListWhereUniqueInput;

    @Field(() => PromotionListUpdateWithoutItemsInput, {nullable:true})
    update?: PromotionListUpdateWithoutItemsInput;
}
