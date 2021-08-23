import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionListCreateWithoutItemsInput } from './promotion-list-create-without-items.input';
import { PromotionListCreateOrConnectWithoutItemsInput } from './promotion-list-create-or-connect-without-items.input';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';

@InputType()
export class PromotionListCreateNestedOneWithoutItemsInput {

    @Field(() => PromotionListCreateWithoutItemsInput, {nullable:true})
    create?: PromotionListCreateWithoutItemsInput;

    @Field(() => PromotionListCreateOrConnectWithoutItemsInput, {nullable:true})
    connectOrCreate?: PromotionListCreateOrConnectWithoutItemsInput;

    @Field(() => PromotionListWhereUniqueInput, {nullable:true})
    connect?: PromotionListWhereUniqueInput;
}
