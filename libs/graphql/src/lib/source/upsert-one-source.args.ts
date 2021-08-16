import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceWhereUniqueInput } from './source-where-unique.input';
import { SourceCreateInput } from './source-create.input';
import { SourceUpdateInput } from './source-update.input';

@ArgsType()
export class UpsertOneSourceArgs {

    @Field(() => SourceWhereUniqueInput, {nullable:false})
    where!: SourceWhereUniqueInput;

    @Field(() => SourceCreateInput, {nullable:false})
    create!: SourceCreateInput;

    @Field(() => SourceUpdateInput, {nullable:false})
    update!: SourceUpdateInput;
}
