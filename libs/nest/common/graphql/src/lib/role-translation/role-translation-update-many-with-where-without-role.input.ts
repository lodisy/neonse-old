import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationScalarWhereInput } from './role-translation-scalar-where.input';
import { RoleTranslationUpdateManyMutationInput } from './role-translation-update-many-mutation.input';

@InputType()
export class RoleTranslationUpdateManyWithWhereWithoutRoleInput {

    @Field(() => RoleTranslationScalarWhereInput, {nullable:false})
    where!: RoleTranslationScalarWhereInput;

    @Field(() => RoleTranslationUpdateManyMutationInput, {nullable:false})
    data!: RoleTranslationUpdateManyMutationInput;
}
