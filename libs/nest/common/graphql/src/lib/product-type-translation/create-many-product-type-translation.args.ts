import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationCreateManyInput } from './product-type-translation-create-many.input';

@ArgsType()
export class CreateManyProductTypeTranslationArgs {

    @Field(() => [ProductTypeTranslationCreateManyInput], {nullable:false})
    data!: Array<ProductTypeTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
