import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';
import { ProductCategoryTranslationOrderByWithRelationInput } from './product-category-translation-order-by-with-relation.input';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryTranslationScalarFieldEnum } from './product-category-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    where?: ProductCategoryTranslationWhereInput;

    @Field(() => [ProductCategoryTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryTranslationOrderByWithRelationInput>;

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductCategoryTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductCategoryTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryTranslationScalarFieldEnum>;
}
