import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';

@ArgsType()
export class DeleteManyProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;
}
