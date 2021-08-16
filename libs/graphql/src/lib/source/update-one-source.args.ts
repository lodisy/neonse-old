import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceUpdateInput } from './source-update.input';
import { SourceWhereUniqueInput } from './source-where-unique.input';

@ArgsType()
export class UpdateOneSourceArgs {

    @Field(() => SourceUpdateInput, {nullable:false})
    data!: SourceUpdateInput;

    @Field(() => SourceWhereUniqueInput, {nullable:false})
    where!: SourceWhereUniqueInput;
}
