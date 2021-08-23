import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationCreateInput } from './product-type-translation-create.input';

@ArgsType()
export class CreateOneProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationCreateInput, {nullable:false})
    data!: ProductTypeTranslationCreateInput;
}
