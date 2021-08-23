import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionListWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
