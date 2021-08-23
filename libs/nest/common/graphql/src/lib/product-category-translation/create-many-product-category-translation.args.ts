import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationCreateManyInput } from './product-category-translation-create-many.input';

@ArgsType()
export class CreateManyProductCategoryTranslationArgs {

    @Field(() => [ProductCategoryTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductCategoryTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
