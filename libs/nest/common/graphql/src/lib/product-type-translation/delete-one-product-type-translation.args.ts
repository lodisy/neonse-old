import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';

@ArgsType()
export class DeleteOneProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;
}
