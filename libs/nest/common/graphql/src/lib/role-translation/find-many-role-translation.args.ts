import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleTranslationWhereInput } from './role-translation-where.input';
import { RoleTranslationOrderByWithRelationInput } from './role-translation-order-by-with-relation.input';
import { RoleTranslationWhereUniqueInput } from './role-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleTranslationScalarFieldEnum } from './role-translation-scalar-field.enum';

@ArgsType()
export class FindManyRoleTranslationArgs {

    @Field(() => RoleTranslationWhereInput, {nullable:true})
    where?: RoleTranslationWhereInput;

    @Field(() => [RoleTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleTranslationOrderByWithRelationInput>;

    @Field(() => RoleTranslationWhereUniqueInput, {nullable:true})
    cursor?: RoleTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoleTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RoleTranslationScalarFieldEnum>;
}
