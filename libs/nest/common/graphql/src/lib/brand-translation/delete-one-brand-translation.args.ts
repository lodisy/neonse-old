import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';

@ArgsType()
export class DeleteOneBrandTranslationArgs {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;
}
