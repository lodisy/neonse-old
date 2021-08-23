import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationCreateInput } from './role-translation-create.input';

@ArgsType()
export class CreateOneRoleTranslationArgs {

    @Field(() => RoleTranslationCreateInput, {nullable:false})
    data!: RoleTranslationCreateInput;
}
