import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';

/** 信用卡 */
/** 信用卡 */
/** 信用卡 */
@ObjectType({description:'信用卡'})
export class Card {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Profile, {nullable:true})
    profile?: Profile;
    @Field(() => String, {nullable:true})
    profileId!: string | null;
    @Field(() => String, {nullable:false})
    number!: bigint;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    expiration!: Date;
    @Field(() => String, {nullable:true})
    bank!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
