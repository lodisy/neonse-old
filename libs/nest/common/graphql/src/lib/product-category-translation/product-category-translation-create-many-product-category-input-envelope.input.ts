import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationCreateManyProductCategoryInput } from './product-category-translation-create-many-product-category.input';

@InputType()
export class ProductCategoryTranslationCreateManyProductCategoryInputEnvelope {

    @Field(() => [ProductCategoryTranslationCreateManyProductCategoryInput], {nullable:false})
    data!: Array<ProductCategoryTranslationCreateManyProductCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
