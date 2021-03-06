import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';
import { ProductTypeTranslationOrderByWithRelationInput } from './product-type-translation-order-by-with-relation.input';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeTranslationScalarFieldEnum } from './product-type-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    where?: ProductTypeTranslationWhereInput;

    @Field(() => [ProductTypeTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTypeTranslationOrderByWithRelationInput>;

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductTypeTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductTypeTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductTypeTranslationScalarFieldEnum>;
}
