import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorCreateInput } from './product-variant-color-create.input';

@ArgsType()
export class CreateOneProductVariantColorArgs {

    @Field(() => ProductVariantColorCreateInput, {nullable:false})
    data!: ProductVariantColorCreateInput;
}
