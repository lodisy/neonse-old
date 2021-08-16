import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateManyProductInput } from './product-variant-create-many-product.input';

@InputType()
export class ProductVariantCreateManyProductInputEnvelope {

    @Field(() => [ProductVariantCreateManyProductInput], {nullable:false})
    data!: Array<ProductVariantCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
