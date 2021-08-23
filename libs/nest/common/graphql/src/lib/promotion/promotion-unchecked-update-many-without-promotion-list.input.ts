import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutPromotionListInput } from './promotion-create-without-promotion-list.input';
import { PromotionCreateOrConnectWithoutPromotionListInput } from './promotion-create-or-connect-without-promotion-list.input';
import { PromotionUpsertWithWhereUniqueWithoutPromotionListInput } from './promotion-upsert-with-where-unique-without-promotion-list.input';
import { PromotionCreateManyPromotionListInputEnvelope } from './promotion-create-many-promotion-list-input-envelope.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionUpdateWithWhereUniqueWithoutPromotionListInput } from './promotion-update-with-where-unique-without-promotion-list.input';
import { PromotionUpdateManyWithWhereWithoutPromotionListInput } from './promotion-update-many-with-where-without-promotion-list.input';
import { PromotionScalarWhereInput } from './promotion-scalar-where.input';

@InputType()
export class PromotionUncheckedUpdateManyWithoutPromotionListInput {

    @Field(() => [PromotionCreateWithoutPromotionListInput], {nullable:true})
    create?: Array<PromotionCreateWithoutPromotionListInput>;

    @Field(() => [PromotionCreateOrConnectWithoutPromotionListInput], {nullable:true})
    connectOrCreate?: Array<PromotionCreateOrConnectWithoutPromotionListInput>;

    @Field(() => [PromotionUpsertWithWhereUniqueWithoutPromotionListInput], {nullable:true})
    upsert?: Array<PromotionUpsertWithWhereUniqueWithoutPromotionListInput>;

    @Field(() => PromotionCreateManyPromotionListInputEnvelope, {nullable:true})
    createMany?: PromotionCreateManyPromotionListInputEnvelope;

    @Field(() => [PromotionWhereUniqueInput], {nullable:true})
    connect?: Array<PromotionWhereUniqueInput>;

    @Field(() => [PromotionWhereUniqueInput], {nullable:true})
    set?: Array<PromotionWhereUniqueInput>;

    @Field(() => [PromotionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PromotionWhereUniqueInput>;

    @Field(() => [PromotionWhereUniqueInput], {nullable:true})
    delete?: Array<PromotionWhereUniqueInput>;

    @Field(() => [PromotionUpdateWithWhereUniqueWithoutPromotionListInput], {nullable:true})
    update?: Array<PromotionUpdateWithWhereUniqueWithoutPromotionListInput>;

    @Field(() => [PromotionUpdateManyWithWhereWithoutPromotionListInput], {nullable:true})
    updateMany?: Array<PromotionUpdateManyWithWhereWithoutPromotionListInput>;

    @Field(() => [PromotionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PromotionScalarWhereInput>;
}
