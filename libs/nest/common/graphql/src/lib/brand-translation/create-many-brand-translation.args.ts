import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationCreateManyInput } from './brand-translation-create-many.input';

@ArgsType()
export class CreateManyBrandTranslationArgs {

    @Field(() => [BrandTranslationCreateManyInput], {nullable:false})
    data!: Array<BrandTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
