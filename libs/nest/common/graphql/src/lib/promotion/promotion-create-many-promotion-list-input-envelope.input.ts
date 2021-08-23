import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateManyPromotionListInput } from './promotion-create-many-promotion-list.input';

@InputType()
export class PromotionCreateManyPromotionListInputEnvelope {

    @Field(() => [PromotionCreateManyPromotionListInput], {nullable:false})
    data!: Array<PromotionCreateManyPromotionListInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
