import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereInput } from './product-type-where.input';
import { ProductTypeOrderByWithRelationInput } from './product-type-order-by-with-relation.input';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeScalarFieldEnum } from './product-type-scalar-field.enum';

@ArgsType()
export class FindManyProductTypeArgs {

    @Field(() => ProductTypeWhereInput, {nullable:true})
    where?: ProductTypeWhereInput;

    @Field(() => [ProductTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTypeOrderByWithRelationInput>;

    @Field(() => ProductTypeWhereUniqueInput, {nullable:true})
    cursor?: ProductTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductTypeScalarFieldEnum>;
}
