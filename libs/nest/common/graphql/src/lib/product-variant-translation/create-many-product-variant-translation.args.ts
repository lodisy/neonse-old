import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationCreateManyInput } from './product-variant-translation-create-many.input';

@ArgsType()
export class CreateManyProductVariantTranslationArgs {

    @Field(() => [ProductVariantTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductVariantTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
