import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationCreateWithoutRoleInput } from './role-translation-create-without-role.input';
import { RoleTranslationCreateOrConnectWithoutRoleInput } from './role-translation-create-or-connect-without-role.input';
import { RoleTranslationCreateManyRoleInputEnvelope } from './role-translation-create-many-role-input-envelope.input';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';

@InputType()
export class RoleTranslationCreateNestedManyWithoutRoleInput {

    @Field(() => [RoleTranslationCreateWithoutRoleInput], {nullable:true})
    create?: Array<RoleTranslationCreateWithoutRoleInput>;

    @Field(() => [RoleTranslationCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<RoleTranslationCreateOrConnectWithoutRoleInput>;

    @Field(() => RoleTranslationCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: RoleTranslationCreateManyRoleInputEnvelope;

    @Field(() => [RoleTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<RoleTranslationWhereUniqueInput>;
}
