import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCreateManyInput } from './product-variant-color-translation-create-many.input';

@ArgsType()
export class CreateManyProductVariantColorTranslationArgs {

    @Field(() => [ProductVariantColorTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductVariantColorTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
