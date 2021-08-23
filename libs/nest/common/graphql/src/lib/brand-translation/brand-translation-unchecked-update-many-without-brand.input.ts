import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationCreateWithoutBrandInput } from './brand-translation-create-without-brand.input';
import { BrandTranslationCreateOrConnectWithoutBrandInput } from './brand-translation-create-or-connect-without-brand.input';
import { BrandTranslationUpsertWithWhereUniqueWithoutBrandInput } from './brand-translation-upsert-with-where-unique-without-brand.input';
import { BrandTranslationCreateManyBrandInputEnvelope } from './brand-translation-create-many-brand-input-envelope.input';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { BrandTranslationUpdateWithWhereUniqueWithoutBrandInput } from './brand-translation-update-with-where-unique-without-brand.input';
import { BrandTranslationUpdateManyWithWhereWithoutBrandInput } from './brand-translation-update-many-with-where-without-brand.input';
import { BrandTranslationScalarWhereInput } from './brand-translation-scalar-where.input';

@InputType()
export class BrandTranslationUncheckedUpdateManyWithoutBrandInput {

    @Field(() => [BrandTranslationCreateWithoutBrandInput], {nullable:true})
    create?: Array<BrandTranslationCreateWithoutBrandInput>;

    @Field(() => [BrandTranslationCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<BrandTranslationCreateOrConnectWithoutBrandInput>;

    @Field(() => [BrandTranslationUpsertWithWhereUniqueWithoutBrandInput], {nullable:true})
    upsert?: Array<BrandTranslationUpsertWithWhereUniqueWithoutBrandInput>;

    @Field(() => BrandTranslationCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: BrandTranslationCreateManyBrandInputEnvelope;

    @Field(() => [BrandTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<BrandTranslationWhereUniqueInput>;

    @Field(() => [BrandTranslationWhereUniqueInput], {nullable:true})
    set?: Array<BrandTranslationWhereUniqueInput>;

    @Field(() => [BrandTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<BrandTranslationWhereUniqueInput>;

    @Field(() => [BrandTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<BrandTranslationWhereUniqueInput>;

    @Field(() => [BrandTranslationUpdateWithWhereUniqueWithoutBrandInput], {nullable:true})
    update?: Array<BrandTranslationUpdateWithWhereUniqueWithoutBrandInput>;

    @Field(() => [BrandTranslationUpdateManyWithWhereWithoutBrandInput], {nullable:true})
    updateMany?: Array<BrandTranslationUpdateManyWithWhereWithoutBrandInput>;

    @Field(() => [BrandTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<BrandTranslationScalarWhereInput>;
}
