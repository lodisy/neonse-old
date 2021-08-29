import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { PermissionOrderByInput } from './permission-order-by.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionScalarFieldEnum } from './permission-scalar-field.enum';

@ArgsType()
export class FindFirstPermissionArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByInput], {nullable:true})
    orderBy?: Array<PermissionOrderByInput>;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    cursor?: PermissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionScalarFieldEnum>;
}
