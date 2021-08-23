import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';

@ArgsType()
export class FindUniqueBrandTranslationArgs {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;
}
