import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoleStatus } from '../prisma/role-status.enum';
import { LanguageCode } from '../prisma/language-code.enum';
import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';

@ObjectType()
export class RoleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RoleStatus, {nullable:true})
    status?: keyof typeof RoleStatus;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: RoleCountAggregate;

    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: RoleMinAggregate;

    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: RoleMaxAggregate;
}
