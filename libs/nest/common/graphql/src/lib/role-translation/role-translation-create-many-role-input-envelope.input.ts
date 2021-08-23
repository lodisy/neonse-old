import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTranslationCreateManyRoleInput } from './role-translation-create-many-role.input';

@InputType()
export class RoleTranslationCreateManyRoleInputEnvelope {

    @Field(() => [RoleTranslationCreateManyRoleInput], {nullable:false})
    data!: Array<RoleTranslationCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
