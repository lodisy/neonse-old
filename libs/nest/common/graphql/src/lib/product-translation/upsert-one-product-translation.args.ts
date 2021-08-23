import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { ProductTranslationCreateInput } from './product-translation-create.input';
import { ProductTranslationUpdateInput } from './product-translation-update.input';

@ArgsType()
export class UpsertOneProductTranslationArgs {

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;

    @Field(() => ProductTranslationCreateInput, {nullable:false})
    create!: ProductTranslationCreateInput;

    @Field(() => ProductTranslationUpdateInput, {nullable:false})
    update!: ProductTranslationUpdateInput;
}
