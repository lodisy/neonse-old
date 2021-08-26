import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AuthenticationStrategy } from '../prisma/authentication-strategy.enum';
import { User } from '../user/user.model';

/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
/** 登入方式 */
@ObjectType({description:'登入方式'})
export class AuthenticationMethod {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => AuthenticationStrategy, {nullable:false,defaultValue:'Local'})
    strategy!: keyof typeof AuthenticationStrategy;
    @Field(() => User, {nullable:false})
    User?: User;
    @Field(() => String, {nullable:false})
    userId!: string;
}
