import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleCreateInput } from './product-variant-style-create.input';

@ArgsType()
export class CreateOneProductVariantStyleArgs {

    @Field(() => ProductVariantStyleCreateInput, {nullable:false})
    data!: ProductVariantStyleCreateInput;
}
