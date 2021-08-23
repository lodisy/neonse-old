import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionScalarWhereInput } from './promotion-scalar-where.input';
import { PromotionUpdateManyMutationInput } from './promotion-update-many-mutation.input';

@InputType()
export class PromotionUpdateManyWithWhereWithoutPromotionListInput {

    @Field(() => PromotionScalarWhereInput, {nullable:false})
    where!: PromotionScalarWhereInput;

    @Field(() => PromotionUpdateManyMutationInput, {nullable:false})
    data!: PromotionUpdateManyMutationInput;
}
