import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListCreateInput } from './promotion-list-create.input';

@ArgsType()
export class CreateOnePromotionListArgs {

    @Field(() => PromotionListCreateInput, {nullable:false})
    data!: PromotionListCreateInput;
}
