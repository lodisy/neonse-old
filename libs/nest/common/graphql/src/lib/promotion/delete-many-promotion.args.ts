import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionWhereInput } from './promotion-where.input';

@ArgsType()
export class DeleteManyPromotionArgs {

    @Field(() => PromotionWhereInput, {nullable:true})
    where?: PromotionWhereInput;
}
