import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@ArgsType()
export class FindUniquePermissionArgs {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;
}
