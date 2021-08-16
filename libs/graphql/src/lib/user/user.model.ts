import { Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: false })
    id!: string;
    @Field(() => String, { nullable: false })
    email!: string;
    @Field(() => String, { nullable: true })
    username!: string | null;
    @Field(() => String, { nullable: false })
    password!: string;
    @Field(() => [Role], { nullable: true })
    roles!: Array<keyof typeof Role>;
    @Field(() => String, { nullable: false })
    jwtToken!: string;
    @Field(() => String, { nullable: false })
    resetPasswordToken!: string;
    @Field(() => String, { nullable: false })
    identifierToken!: string;
    @Field(() => Date, { nullable: false })
    createdAt!: Date;
    @Field(() => Date, { nullable: true })
    updatedAt!: Date | null;
    @Field(() => Profile, { nullable: true })
    profile?: Profile;
}
