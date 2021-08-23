import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationCreateManyBrandInput } from './brand-translation-create-many-brand.input';

@InputType()
export class BrandTranslationCreateManyBrandInputEnvelope {

    @Field(() => [BrandTranslationCreateManyBrandInput], {nullable:false})
    data!: Array<BrandTranslationCreateManyBrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
