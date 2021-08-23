import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';

@ArgsType()
export class FindUniqueProductTranslationArgs {

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;
}
