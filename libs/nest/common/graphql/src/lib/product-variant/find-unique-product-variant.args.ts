import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@ArgsType()
export class FindUniqueProductVariantArgs {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;
}
