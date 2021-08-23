import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PromotionUpdateManyWithoutPromotionListInput } from '../promotion/promotion-update-many-without-promotion-list.input';

@InputType()
export class PromotionListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: IntFieldUpdateOperationsInput;

    @Field(() => PromotionUpdateManyWithoutPromotionListInput, {nullable:true})
    items?: PromotionUpdateManyWithoutPromotionListInput;
}
