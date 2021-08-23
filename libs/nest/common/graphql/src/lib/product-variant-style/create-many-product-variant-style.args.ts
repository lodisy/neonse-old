import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleCreateManyInput } from './product-variant-style-create-many.input';

@ArgsType()
export class CreateManyProductVariantStyleArgs {

    @Field(() => [ProductVariantStyleCreateManyInput], {nullable:false})
    data!: Array<ProductVariantStyleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
