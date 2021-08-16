import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileListRelationFilter {

    @Field(() => ProfileWhereInput, {nullable:true})
    every?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    some?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    none?: ProfileWhereInput;
}
