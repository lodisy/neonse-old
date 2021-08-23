import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeCreateInput } from './product-variant-size-create.input';

@ArgsType()
export class CreateOneProductVariantSizeArgs {

    @Field(() => ProductVariantSizeCreateInput, {nullable:false})
    data!: ProductVariantSizeCreateInput;
}
