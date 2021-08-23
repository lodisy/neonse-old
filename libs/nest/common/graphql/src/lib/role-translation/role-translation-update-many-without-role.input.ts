import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationCreateWithoutRoleInput } from './role-translation-create-without-role.input';
import { RoleTranslationCreateOrConnectWithoutRoleInput } from './role-translation-create-or-connect-without-role.input';
import { RoleTranslationUpsertWithWhereUniqueWithoutRoleInput } from './role-translation-upsert-with-where-unique-without-role.input';
import { RoleTranslationCreateManyRoleInputEnvelope } from './role-translation-create-many-role-input-envelope.input';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { RoleTranslationUpdateWithWhereUniqueWithoutRoleInput } from './role-translation-update-with-where-unique-without-role.input';
import { RoleTranslationUpdateManyWithWhereWithoutRoleInput } from './role-translation-update-many-with-where-without-role.input';
import { RoleTranslationScalarWhereInput } from './role-translation-scalar-where.input';

@InputType()
export class RoleTranslationUpdateManyWithoutRoleInput {

    @Field(() => [RoleTranslationCreateWithoutRoleInput], {nullable:true})
    create?: Array<RoleTranslationCreateWithoutRoleInput>;

    @Field(() => [RoleTranslationCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<RoleTranslationCreateOrConnectWithoutRoleInput>;

    @Field(() => [RoleTranslationUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<RoleTranslationUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => RoleTranslationCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: RoleTranslationCreateManyRoleInputEnvelope;

    @Field(() => [RoleTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<RoleTranslationWhereUniqueInput>;

    @Field(() => [RoleTranslationWhereUniqueInput], {nullable:true})
    set?: Array<RoleTranslationWhereUniqueInput>;

    @Field(() => [RoleTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoleTranslationWhereUniqueInput>;

    @Field(() => [RoleTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<RoleTranslationWhereUniqueInput>;

    @Field(() => [RoleTranslationUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<RoleTranslationUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [RoleTranslationUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<RoleTranslationUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [RoleTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoleTranslationScalarWhereInput>;
}
