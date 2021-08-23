import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';

@ArgsType()
export class DeleteOneProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;
}
