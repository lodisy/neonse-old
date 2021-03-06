import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';

@ArgsType()
export class DeleteOneProductTypeArgs {

    @Field(() => ProductTypeWhereUniqueInput, {nullable:false})
    where!: ProductTypeWhereUniqueInput;
}
