import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationCreateManyProductTypeInput } from './product-type-translation-create-many-product-type.input';

@InputType()
export class ProductTypeTranslationCreateManyProductTypeInputEnvelope {

    @Field(() => [ProductTypeTranslationCreateManyProductTypeInput], {nullable:false})
    data!: Array<ProductTypeTranslationCreateManyProductTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
