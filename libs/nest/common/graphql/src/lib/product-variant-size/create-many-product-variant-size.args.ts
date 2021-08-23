import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeCreateManyInput } from './product-variant-size-create-many.input';

@ArgsType()
export class CreateManyProductVariantSizeArgs {

    @Field(() => [ProductVariantSizeCreateManyInput], {nullable:false})
    data!: Array<ProductVariantSizeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
