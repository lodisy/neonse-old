import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';

@ArgsType()
export class DeleteOnePromotionArgs {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;
}
