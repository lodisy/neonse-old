import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutTranslationsInput } from './role-create-without-translations.input';
import { RoleCreateOrConnectWithoutTranslationsInput } from './role-create-or-connect-without-translations.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutTranslationsInput {

    @Field(() => RoleCreateWithoutTranslationsInput, {nullable:true})
    create?: RoleCreateWithoutTranslationsInput;

    @Field(() => RoleCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutTranslationsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}
