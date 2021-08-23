import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutTranslationsInput } from './role-create-without-translations.input';
import { RoleCreateOrConnectWithoutTranslationsInput } from './role-create-or-connect-without-translations.input';
import { RoleUpsertWithoutTranslationsInput } from './role-upsert-without-translations.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutTranslationsInput } from './role-update-without-translations.input';

@InputType()
export class RoleUpdateOneWithoutTranslationsInput {

    @Field(() => RoleCreateWithoutTranslationsInput, {nullable:true})
    create?: RoleCreateWithoutTranslationsInput;

    @Field(() => RoleCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutTranslationsInput;

    @Field(() => RoleUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: RoleUpsertWithoutTranslationsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoleUpdateWithoutTranslationsInput, {nullable:true})
    update?: RoleUpdateWithoutTranslationsInput;
}
