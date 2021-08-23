import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceWhereInput } from './source-where.input';

@ArgsType()
export class DeleteManySourceArgs {

    @Field(() => SourceWhereInput, {nullable:true})
    where?: SourceWhereInput;
}
