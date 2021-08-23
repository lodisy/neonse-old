import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationCreateInput } from './brand-translation-create.input';

@ArgsType()
export class CreateOneBrandTranslationArgs {

    @Field(() => BrandTranslationCreateInput, {nullable:false})
    data!: BrandTranslationCreateInput;
}
