import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateManyAssetInput } from './product-variant-style-create-many-asset.input';

@InputType()
export class ProductVariantStyleCreateManyAssetInputEnvelope {

    @Field(() => [ProductVariantStyleCreateManyAssetInput], {nullable:false})
    data!: Array<ProductVariantStyleCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
