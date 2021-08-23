import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationUpdateInput } from './product-type-translation-update.input';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationUpdateInput, {nullable:false})
    data!: ProductTypeTranslationUpdateInput;

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;
}
