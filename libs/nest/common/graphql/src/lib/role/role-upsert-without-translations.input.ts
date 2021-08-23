import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutTranslationsInput } from './role-update-without-translations.input';
import { RoleCreateWithoutTranslationsInput } from './role-create-without-translations.input';

@InputType()
export class RoleUpsertWithoutTranslationsInput {

    @Field(() => RoleUpdateWithoutTranslationsInput, {nullable:false})
    update!: RoleUpdateWithoutTranslationsInput;

    @Field(() => RoleCreateWithoutTranslationsInput, {nullable:false})
    create!: RoleCreateWithoutTranslationsInput;
}
