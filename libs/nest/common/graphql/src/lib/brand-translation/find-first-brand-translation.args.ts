import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereInput } from './brand-translation-where.input';
import { BrandTranslationOrderByWithRelationInput } from './brand-translation-order-by-with-relation.input';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandTranslationScalarFieldEnum } from './brand-translation-scalar-field.enum';

@ArgsType()
export class FindFirstBrandTranslationArgs {

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    where?: BrandTranslationWhereInput;

    @Field(() => [BrandTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandTranslationOrderByWithRelationInput>;

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:true})
    cursor?: BrandTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BrandTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BrandTranslationScalarFieldEnum>;
}
