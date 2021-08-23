import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';

@ArgsType()
export class DeleteManyProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    where?: ProductCategoryTranslationWhereInput;
}
