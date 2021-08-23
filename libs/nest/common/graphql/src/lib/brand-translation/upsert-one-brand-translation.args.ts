import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { BrandTranslationCreateInput } from './brand-translation-create.input';
import { BrandTranslationUpdateInput } from './brand-translation-update.input';

@ArgsType()
export class UpsertOneBrandTranslationArgs {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;

    @Field(() => BrandTranslationCreateInput, {nullable:false})
    create!: BrandTranslationCreateInput;

    @Field(() => BrandTranslationUpdateInput, {nullable:false})
    update!: BrandTranslationUpdateInput;
}
