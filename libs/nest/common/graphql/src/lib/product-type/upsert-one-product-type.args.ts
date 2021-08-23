import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { ProductTypeCreateInput } from './product-type-create.input';
import { ProductTypeUpdateInput } from './product-type-update.input';

@ArgsType()
export class UpsertOneProductTypeArgs {

    @Field(() => ProductTypeWhereUniqueInput, {nullable:false})
    where!: ProductTypeWhereUniqueInput;

    @Field(() => ProductTypeCreateInput, {nullable:false})
    create!: ProductTypeCreateInput;

    @Field(() => ProductTypeUpdateInput, {nullable:false})
    update!: ProductTypeUpdateInput;
}
