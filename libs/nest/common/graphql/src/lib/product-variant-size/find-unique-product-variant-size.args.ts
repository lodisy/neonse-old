import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';

@ArgsType()
export class FindUniqueProductVariantSizeArgs {

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:false})
    where!: ProductVariantSizeWhereUniqueInput;
}
