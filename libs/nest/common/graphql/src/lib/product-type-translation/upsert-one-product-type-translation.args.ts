import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { ProductTypeTranslationCreateInput } from './product-type-translation-create.input';
import { ProductTypeTranslationUpdateInput } from './product-type-translation-update.input';

@ArgsType()
export class UpsertOneProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;

    @Field(() => ProductTypeTranslationCreateInput, {nullable:false})
    create!: ProductTypeTranslationCreateInput;

    @Field(() => ProductTypeTranslationUpdateInput, {nullable:false})
    update!: ProductTypeTranslationUpdateInput;
}
