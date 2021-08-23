import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationUpdateInput } from './brand-translation-update.input';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';

@ArgsType()
export class UpdateOneBrandTranslationArgs {

    @Field(() => BrandTranslationUpdateInput, {nullable:false})
    data!: BrandTranslationUpdateInput;

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;
}
