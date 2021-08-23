import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleUpdateManyMutationInput } from './product-variant-style-update-many-mutation.input';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';

@ArgsType()
export class UpdateManyProductVariantStyleArgs {

    @Field(() => ProductVariantStyleUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantStyleUpdateManyMutationInput;

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    where?: ProductVariantStyleWhereInput;
}
