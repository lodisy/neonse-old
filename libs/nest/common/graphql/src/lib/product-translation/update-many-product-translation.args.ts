import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationUpdateManyMutationInput } from './product-translation-update-many-mutation.input';
import { ProductTranslationWhereInput } from './product-translation-where.input';

@ArgsType()
export class UpdateManyProductTranslationArgs {

    @Field(() => ProductTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductTranslationUpdateManyMutationInput;

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    where?: ProductTranslationWhereInput;
}
