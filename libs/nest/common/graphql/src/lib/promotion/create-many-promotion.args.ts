import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionCreateManyInput } from './promotion-create-many.input';

@ArgsType()
export class CreateManyPromotionArgs {

    @Field(() => [PromotionCreateManyInput], {nullable:false})
    data!: Array<PromotionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
