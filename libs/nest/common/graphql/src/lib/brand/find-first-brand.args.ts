import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { BrandOrderByWithRelationInput } from './brand-order-by-with-relation.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandScalarFieldEnum } from './brand-scalar-field.enum';

@ArgsType()
export class FindFirstBrandArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    where?: BrandWhereInput;

    @Field(() => [BrandOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandOrderByWithRelationInput>;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: BrandWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BrandScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BrandScalarFieldEnum>;
}
