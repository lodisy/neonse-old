import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereInput } from './product-variant-translation-where.input';
import { ProductVariantTranslationOrderByInput } from './product-variant-translation-order-by.input';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantTranslationScalarFieldEnum } from './product-variant-translation-scalar-field.enum';

@ArgsType()
export class FindFirstProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    where?: ProductVariantTranslationWhereInput;

    @Field(() => [ProductVariantTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantTranslationOrderByInput>;

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantTranslationScalarFieldEnum>;
}
