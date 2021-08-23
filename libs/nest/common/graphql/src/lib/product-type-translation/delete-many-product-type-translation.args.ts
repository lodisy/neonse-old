import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';

@ArgsType()
export class DeleteManyProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    where?: ProductTypeTranslationWhereInput;
}
