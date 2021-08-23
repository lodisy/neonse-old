import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListUpdateManyMutationInput } from './promotion-list-update-many-mutation.input';
import { PromotionListWhereInput } from './promotion-list-where.input';

@ArgsType()
export class UpdateManyPromotionListArgs {

    @Field(() => PromotionListUpdateManyMutationInput, {nullable:false})
    data!: PromotionListUpdateManyMutationInput;

    @Field(() => PromotionListWhereInput, {nullable:true})
    where?: PromotionListWhereInput;
}
