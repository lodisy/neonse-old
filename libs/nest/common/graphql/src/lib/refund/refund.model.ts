import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

/** 退款 */
/** 退款 */
/** 退款 */
/** 退款 */
/** 退款 */
/** 退款 */
/** 退款 */
/** 退款 */
@ObjectType({description:'退款'})
export class Refund {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    reason!: string;
}
