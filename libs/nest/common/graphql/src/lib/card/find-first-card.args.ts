import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardWhereInput } from './card-where.input';
import { CardOrderByWithRelationInput } from './card-order-by-with-relation.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardScalarFieldEnum } from './card-scalar-field.enum';

@ArgsType()
export class FindFirstCardArgs {

    @Field(() => CardWhereInput, {nullable:true})
    where?: CardWhereInput;

    @Field(() => [CardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CardOrderByWithRelationInput>;

    @Field(() => CardWhereUniqueInput, {nullable:true})
    cursor?: CardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CardScalarFieldEnum>;
}
