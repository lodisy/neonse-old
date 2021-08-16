import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RoleStatus } from '../prisma/role-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Role {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => RoleStatus, {nullable:false,defaultValue:'NORMAL'})
    status!: keyof typeof RoleStatus;
    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isDefault!: boolean;
    @Field(() => [User], {nullable:true})
    users?: Array<User>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
