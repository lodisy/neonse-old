import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationUpdateInput } from './role-translation-update.input';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';

@ArgsType()
export class UpdateOneRoleTranslationArgs {

    @Field(() => RoleTranslationUpdateInput, {nullable:false})
    data!: RoleTranslationUpdateInput;

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:false})
    where!: RoleTranslationWhereUniqueInput;
}
