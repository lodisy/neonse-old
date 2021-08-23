import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';

@ArgsType()
export class DeleteManyProductVariantArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    where?: ProductVariantWhereInput;
}
