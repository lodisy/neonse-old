import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';

@ArgsType()
export class DeleteManyProductArgs {

    @Field(() => ProductWhereInput, {nullable:true})
    where?: ProductWhereInput;
}
