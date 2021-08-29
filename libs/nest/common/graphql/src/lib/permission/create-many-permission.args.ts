import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionCreateManyInput } from './permission-create-many.input';

@ArgsType()
export class CreateManyPermissionArgs {

    @Field(() => [PermissionCreateManyInput], {nullable:false})
    data!: Array<PermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
