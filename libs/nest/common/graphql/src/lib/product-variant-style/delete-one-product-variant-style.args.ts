import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';

@ArgsType()
export class DeleteOneProductVariantStyleArgs {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;
}
