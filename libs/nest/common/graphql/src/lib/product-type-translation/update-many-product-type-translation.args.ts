import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationUpdateManyMutationInput } from './product-type-translation-update-many-mutation.input';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';

@ArgsType()
export class UpdateManyProductTypeTranslationArgs {

    @Field(() => ProductTypeTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductTypeTranslationUpdateManyMutationInput;

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    where?: ProductTypeTranslationWhereInput;
}
