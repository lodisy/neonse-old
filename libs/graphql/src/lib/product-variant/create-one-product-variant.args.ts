import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantCreateInput } from './product-variant-create.input';

@ArgsType()
export class CreateOneProductVariantArgs {

    @Field(() => ProductVariantCreateInput, {nullable:false})
    data!: ProductVariantCreateInput;
}
