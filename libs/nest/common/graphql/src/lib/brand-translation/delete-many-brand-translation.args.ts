import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereInput } from './brand-translation-where.input';

@ArgsType()
export class DeleteManyBrandTranslationArgs {

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    where?: BrandTranslationWhereInput;
}
