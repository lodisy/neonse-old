import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';
import { ProductVariantColorTranslationOrderByWithRelationInput } from './product-variant-color-translation-order-by-with-relation.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorTranslationScalarFieldEnum } from './product-variant-color-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;

    @Field(() => [ProductVariantColorTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantColorTranslationOrderByWithRelationInput>;

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantColorTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantColorTranslationScalarFieldEnum>;
}
