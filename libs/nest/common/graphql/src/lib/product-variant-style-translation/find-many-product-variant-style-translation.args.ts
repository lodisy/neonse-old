import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';
import { ProductVariantStyleTranslationOrderByWithRelationInput } from './product-variant-style-translation-order-by-with-relation.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleTranslationScalarFieldEnum } from './product-variant-style-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;

    @Field(() => [ProductVariantStyleTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleTranslationOrderByWithRelationInput>;

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantStyleTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantStyleTranslationScalarFieldEnum>;
}
