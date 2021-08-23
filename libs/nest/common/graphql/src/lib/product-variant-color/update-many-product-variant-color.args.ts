import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorUpdateManyMutationInput } from './product-variant-color-update-many-mutation.input';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';

@ArgsType()
export class UpdateManyProductVariantColorArgs {

    @Field(() => ProductVariantColorUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantColorUpdateManyMutationInput;

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;
}
