import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';
import { ProductVariantColorTranslationOrderByInput } from './product-variant-color-translation-order-by.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorTranslationScalarFieldEnum } from './product-variant-color-translation-scalar-field.enum';

@ArgsType()
export class FindFirstProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;

    @Field(() => [ProductVariantColorTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantColorTranslationOrderByInput>;

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantColorTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantColorTranslationScalarFieldEnum>;
}
