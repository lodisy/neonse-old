import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeCreateInput } from './product-type-create.input';

@ArgsType()
export class CreateOneProductTypeArgs {

    @Field(() => ProductTypeCreateInput, {nullable:false})
    data!: ProductTypeCreateInput;
}
