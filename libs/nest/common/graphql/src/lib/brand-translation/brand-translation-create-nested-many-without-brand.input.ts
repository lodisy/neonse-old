import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationCreateWithoutBrandInput } from './brand-translation-create-without-brand.input';
import { BrandTranslationCreateOrConnectWithoutBrandInput } from './brand-translation-create-or-connect-without-brand.input';
import { BrandTranslationCreateManyBrandInputEnvelope } from './brand-translation-create-many-brand-input-envelope.input';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';

@InputType()
export class BrandTranslationCreateNestedManyWithoutBrandInput {

    @Field(() => [BrandTranslationCreateWithoutBrandInput], {nullable:true})
    create?: Array<BrandTranslationCreateWithoutBrandInput>;

    @Field(() => [BrandTranslationCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<BrandTranslationCreateOrConnectWithoutBrandInput>;

    @Field(() => BrandTranslationCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: BrandTranslationCreateManyBrandInputEnvelope;

    @Field(() => [BrandTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<BrandTranslationWhereUniqueInput>;
}
