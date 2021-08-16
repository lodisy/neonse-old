import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantUpdateManyMutationInput } from './product-variant-update-many-mutation.input';
import { ProductVariantWhereInput } from './product-variant-where.input';

@ArgsType()
export class UpdateManyProductVariantArgs {

    @Field(() => ProductVariantUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantUpdateManyMutationInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    where?: ProductVariantWhereInput;
}
