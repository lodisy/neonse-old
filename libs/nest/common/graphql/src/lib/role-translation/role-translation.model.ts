import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { Role } from '../role/role.model';

@ObjectType()
export class RoleTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'zh_Hans'})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Role, {nullable:true})
    Role?: Role;
    @Field(() => String, {nullable:true})
    roleId!: string | null;
}
