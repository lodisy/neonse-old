import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationScalarWhereInput } from './brand-translation-scalar-where.input';
import { BrandTranslationUpdateManyMutationInput } from './brand-translation-update-many-mutation.input';

@InputType()
export class BrandTranslationUpdateManyWithWhereWithoutBrandInput {

    @Field(() => BrandTranslationScalarWhereInput, {nullable:false})
    where!: BrandTranslationScalarWhereInput;

    @Field(() => BrandTranslationUpdateManyMutationInput, {nullable:false})
    data!: BrandTranslationUpdateManyMutationInput;
}
