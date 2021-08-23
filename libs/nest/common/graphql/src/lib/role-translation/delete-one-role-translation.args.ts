import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';

@ArgsType()
export class DeleteOneRoleTranslationArgs {

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;
}
