import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';

@ArgsType()
export class FindUniqueProductVariantColorArgs {

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorWhereUniqueInput;
}
