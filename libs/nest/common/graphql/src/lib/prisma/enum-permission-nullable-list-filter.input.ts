import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permission } from './permission.enum';

@InputType()
export class EnumPermissionNullableListFilter {

    @Field(() => [Permission], {nullable:true})
    equals?: Array<keyof typeof Permission>;

    @Field(() => Permission, {nullable:true})
    has?: keyof typeof Permission;

    @Field(() => [Permission], {nullable:true})
    hasEvery?: Array<keyof typeof Permission>;

    @Field(() => [Permission], {nullable:true})
    hasSome?: Array<keyof typeof Permission>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
