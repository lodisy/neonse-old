import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SourceWhereInput } from './source-where.input';

@InputType()
export class SourceRelationFilter {

    @Field(() => SourceWhereInput, {nullable:true})
    is?: SourceWhereInput;

    @Field(() => SourceWhereInput, {nullable:true})
    isNot?: SourceWhereInput;
}
