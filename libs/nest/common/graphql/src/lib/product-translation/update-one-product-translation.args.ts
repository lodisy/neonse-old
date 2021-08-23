import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationUpdateInput } from './product-translation-update.input';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductTranslationArgs {

    @Field(() => ProductTranslationUpdateInput, {nullable:false})
    data!: ProductTranslationUpdateInput;

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;
}
