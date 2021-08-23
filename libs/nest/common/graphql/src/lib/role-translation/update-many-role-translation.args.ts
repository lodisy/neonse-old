import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationUpdateManyMutationInput } from './role-translation-update-many-mutation.input';
import { RoleTranslationWhereInput } from './role-translation-where.input';

@ArgsType()
export class UpdateManyRoleTranslationArgs {

    @Field(() => RoleTranslationUpdateManyMutationInput, {nullable:false})
    data!: RoleTranslationUpdateManyMutationInput;

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    where?: RoleTranslationWhereInput;
}
