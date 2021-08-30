import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LanguageCode } from '../prisma/language-code.enum';

@InputType()
export class RoleCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(10)
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    description?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;
}
