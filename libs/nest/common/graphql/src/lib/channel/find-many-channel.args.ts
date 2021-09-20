import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereInput } from './channel-where.input';
import { ChannelOrderByWithRelationInput } from './channel-order-by-with-relation.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChannelScalarFieldEnum } from './channel-scalar-field.enum';

@ArgsType()
export class FindManyChannelArgs {

    @Field(() => ChannelWhereInput, {nullable:true})
    where?: ChannelWhereInput;

    @Field(() => [ChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChannelOrderByWithRelationInput>;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    cursor?: ChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChannelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChannelScalarFieldEnum>;
}
