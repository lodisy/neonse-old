import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationCreateManyInput } from './product-translation-create-many.input';

@ArgsType()
export class CreateManyProductTranslationArgs {

    @Field(() => [ProductTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
