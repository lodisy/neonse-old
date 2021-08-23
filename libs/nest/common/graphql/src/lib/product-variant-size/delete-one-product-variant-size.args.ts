import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';

@ArgsType()
export class DeleteOneProductVariantSizeArgs {

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:false})
    where!: ProductVariantSizeWhereUniqueInput;
}
