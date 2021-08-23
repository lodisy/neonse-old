import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionUpdateManyMutationInput } from './promotion-update-many-mutation.input';
import { PromotionWhereInput } from './promotion-where.input';

@ArgsType()
export class UpdateManyPromotionArgs {

    @Field(() => PromotionUpdateManyMutationInput, {nullable:false})
    data!: PromotionUpdateManyMutationInput;

    @Field(() => PromotionWhereInput, {nullable:true})
    where?: PromotionWhereInput;
}
