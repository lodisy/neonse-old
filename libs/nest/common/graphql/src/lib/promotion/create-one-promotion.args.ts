import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionCreateInput } from './promotion-create.input';

@ArgsType()
export class CreateOnePromotionArgs {

    @Field(() => PromotionCreateInput, {nullable:false})
    data!: PromotionCreateInput;
}
