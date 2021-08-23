import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';
import { ProductVariantStyleTranslationOrderByInput } from './product-variant-style-translation-order-by.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleTranslationScalarFieldEnum } from './product-variant-style-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;

    @Field(() => [ProductVariantStyleTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleTranslationOrderByInput>;

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantStyleTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantStyleTranslationScalarFieldEnum>;
}
