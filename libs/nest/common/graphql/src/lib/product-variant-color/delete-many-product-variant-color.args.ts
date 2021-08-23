import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';

@ArgsType()
export class DeleteManyProductVariantColorArgs {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;
}
