import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PromotionUncheckedUpdateManyWithoutPromotionListInput } from '../promotion/promotion-unchecked-update-many-without-promotion-list.input';

@InputType()
export class PromotionListUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: IntFieldUpdateOperationsInput;

    @Field(() => PromotionUncheckedUpdateManyWithoutPromotionListInput, {nullable:true})
    items?: PromotionUncheckedUpdateManyWithoutPromotionListInput;
}
