import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutTranslationsInput } from './role-create-without-translations.input';

@InputType()
export class RoleCreateOrConnectWithoutTranslationsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutTranslationsInput, {nullable:false})
    create!: RoleCreateWithoutTranslationsInput;
}
