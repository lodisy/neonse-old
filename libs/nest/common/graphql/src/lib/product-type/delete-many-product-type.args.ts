import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereInput } from './product-type-where.input';

@ArgsType()
export class DeleteManyProductTypeArgs {

    @Field(() => ProductTypeWhereInput, {nullable:true})
    where?: ProductTypeWhereInput;
}
