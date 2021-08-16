import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProfileWhereUniqueInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
