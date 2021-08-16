import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class Card {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Profile, {nullable:false})
    cardHolder?: Profile;
    @Field(() => String, {nullable:false})
    profileId!: string;
    @Field(() => String, {nullable:false})
    number!: bigint;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    expiration!: Date;
    @Field(() => String, {nullable:true})
    bank!: string | null;
}
