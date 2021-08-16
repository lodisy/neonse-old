import { Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class Address {
    @Field(() => ID, { nullable: false })
    id!: string;
    @Field(() => Profile, { nullable: false })
    profile?: Profile;
    @Field(() => String, { nullable: false })
    profileId!: string;
    @Field(() => String, { nullable: false })
    name!: string;
    @Field(() => String, { nullable: true })
    email!: string | null;
    @Field(() => String, { nullable: true })
    phone!: string | null;
    @Field(() => String, { nullable: false })
    street!: string;
    @Field(() => String, { nullable: true })
    district!: string | null;
    @Field(() => String, { nullable: false })
    city!: string;
    @Field(() => String, { nullable: true })
    state!: string | null;
    @Field(() => String, { nullable: true })
    zip!: string | null;
    @Field(() => String, { nullable: false })
    country!: string;
}
