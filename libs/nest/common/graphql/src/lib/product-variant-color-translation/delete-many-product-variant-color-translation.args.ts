import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';

@ArgsType()
export class DeleteManyProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;
}
