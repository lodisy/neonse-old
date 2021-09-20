import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceWhereInput } from './source-where.input';
import { SourceOrderByWithRelationInput } from './source-order-by-with-relation.input';
import { SourceWhereUniqueInput } from './source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SourceScalarFieldEnum } from './source-scalar-field.enum';

@ArgsType()
export class FindFirstSourceArgs {

    @Field(() => SourceWhereInput, {nullable:true})
    where?: SourceWhereInput;

    @Field(() => [SourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SourceOrderByWithRelationInput>;

    @Field(() => SourceWhereUniqueInput, {nullable:true})
    cursor?: SourceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SourceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SourceScalarFieldEnum>;
}
