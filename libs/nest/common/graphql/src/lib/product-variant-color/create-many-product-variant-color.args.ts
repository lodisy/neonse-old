import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorCreateManyInput } from './product-variant-color-create-many.input';

@ArgsType()
export class CreateManyProductVariantColorArgs {

    @Field(() => [ProductVariantColorCreateManyInput], {nullable:false})
    data!: Array<ProductVariantColorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
