import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryCreateInput } from './product-category-create.input';

@ArgsType()
export class CreateOneProductCategoryArgs {

    @Field(() => ProductCategoryCreateInput, {nullable:false})
    data!: ProductCategoryCreateInput;
}
