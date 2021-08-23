import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductVariantColorTranslationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
