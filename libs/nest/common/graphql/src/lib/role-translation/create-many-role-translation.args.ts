import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationCreateManyInput } from './role-translation-create-many.input';

@ArgsType()
export class CreateManyRoleTranslationArgs {

    @Field(() => [RoleTranslationCreateManyInput], {nullable:false})
    data!: Array<RoleTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
