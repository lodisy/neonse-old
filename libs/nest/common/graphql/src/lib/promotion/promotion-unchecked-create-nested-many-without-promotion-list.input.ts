import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutPromotionListInput } from './promotion-create-without-promotion-list.input';
import { PromotionCreateOrConnectWithoutPromotionListInput } from './promotion-create-or-connect-without-promotion-list.input';
import { PromotionCreateManyPromotionListInputEnvelope } from './promotion-create-many-promotion-list-input-envelope.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';

@InputType()
export class PromotionUncheckedCreateNestedManyWithoutPromotionListInput {

    @Field(() => [PromotionCreateWithoutPromotionListInput], {nullable:true})
    create?: Array<PromotionCreateWithoutPromotionListInput>;

    @Field(() => [PromotionCreateOrConnectWithoutPromotionListInput], {nullable:true})
    connectOrCreate?: Array<PromotionCreateOrConnectWithoutPromotionListInput>;

    @Field(() => PromotionCreateManyPromotionListInputEnvelope, {nullable:true})
    createMany?: PromotionCreateManyPromotionListInputEnvelope;

    @Field(() => [PromotionWhereUniqueInput], {nullable:true})
    connect?: Array<PromotionWhereUniqueInput>;
}
