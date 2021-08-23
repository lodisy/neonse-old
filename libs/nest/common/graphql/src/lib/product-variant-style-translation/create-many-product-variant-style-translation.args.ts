import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCreateManyInput } from './product-variant-style-translation-create-many.input';

@ArgsType()
export class CreateManyProductVariantStyleTranslationArgs {

    @Field(() => [ProductVariantStyleTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductVariantStyleTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
