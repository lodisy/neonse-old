import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationUpdateManyMutationInput } from './brand-translation-update-many-mutation.input';
import { BrandTranslationWhereInput } from './brand-translation-where.input';

@ArgsType()
export class UpdateManyBrandTranslationArgs {

    @Field(() => BrandTranslationUpdateManyMutationInput, {nullable:false})
    data!: BrandTranslationUpdateManyMutationInput;

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    where?: BrandTranslationWhereInput;
}
