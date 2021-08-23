import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationCreateInput } from './product-translation-create.input';

@ArgsType()
export class CreateOneProductTranslationArgs {

    @Field(() => ProductTranslationCreateInput, {nullable:false})
    data!: ProductTranslationCreateInput;
}
