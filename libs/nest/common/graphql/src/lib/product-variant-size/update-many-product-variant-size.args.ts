import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeUpdateManyMutationInput } from './product-variant-size-update-many-mutation.input';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';

@ArgsType()
export class UpdateManyProductVariantSizeArgs {

    @Field(() => ProductVariantSizeUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantSizeUpdateManyMutationInput;

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    where?: ProductVariantSizeWhereInput;
}
