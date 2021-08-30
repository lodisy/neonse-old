import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Channel } from '../channel/channel.model';
import { Permission } from '../permission/permission.model';
import { LanguageCode } from '../prisma/language-code.enum';
import { RoleTranslation } from '../role-translation/role-translation.model';

/** 角色 */
@ObjectType({description:'角色'})
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:true})
    user?: User;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    enabled!: boolean | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isDefault!: boolean | null;

    @Field(() => [Channel], {nullable:true})
    channels?: Array<Channel>;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => [RoleTranslation], {nullable:true})
    translations?: Array<RoleTranslation>;
}
