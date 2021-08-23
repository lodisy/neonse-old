import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';

@ArgsType()
export class DeleteOnePromotionListArgs {

    @Field(() => PromotionListWhereUniqueInput, {nullable:false})
    where!: PromotionListWhereUniqueInput;
}
