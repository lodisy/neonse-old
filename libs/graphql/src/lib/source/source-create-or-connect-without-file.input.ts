import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SourceWhereUniqueInput } from './source-where-unique.input';
import { SourceCreateWithoutFileInput } from './source-create-without-file.input';

@InputType()
export class SourceCreateOrConnectWithoutFileInput {

    @Field(() => SourceWhereUniqueInput, {nullable:false})
    where!: SourceWhereUniqueInput;

    @Field(() => SourceCreateWithoutFileInput, {nullable:false})
    create!: SourceCreateWithoutFileInput;
}
