import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationCreateManyProductInput } from './product-translation-create-many-product.input';

@InputType()
export class ProductTranslationCreateManyProductInputEnvelope {

    @Field(() => [ProductTranslationCreateManyProductInput], {nullable:false})
    data!: Array<ProductTranslationCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
