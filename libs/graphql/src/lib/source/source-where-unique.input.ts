import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SourceWhereUniqueInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    fileId?: string;
}
