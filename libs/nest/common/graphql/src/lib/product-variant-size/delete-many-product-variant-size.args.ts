import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';

@ArgsType()
export class DeleteManyProductVariantSizeArgs {

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    where?: ProductVariantSizeWhereInput;
}
