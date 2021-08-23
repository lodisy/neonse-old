import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereInput } from './role-translation-where.input';

@ArgsType()
export class DeleteManyRoleTranslationArgs {

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    where?: RoleTranslationWhereInput;
}
