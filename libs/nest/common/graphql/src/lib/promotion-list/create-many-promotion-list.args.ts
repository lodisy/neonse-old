import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListCreateManyInput } from './promotion-list-create-many.input';

@ArgsType()
export class CreateManyPromotionListArgs {

    @Field(() => [PromotionListCreateManyInput], {nullable:false})
    data!: Array<PromotionListCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
