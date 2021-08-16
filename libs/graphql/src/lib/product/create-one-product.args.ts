import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCreateInput } from './product-create.input';

@ArgsType()
export class CreateOneProductArgs {

    @Field(() => ProductCreateInput, {nullable:false})
    data!: ProductCreateInput;
}
