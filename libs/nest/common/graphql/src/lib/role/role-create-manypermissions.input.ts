import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permission } from '../prisma/permission.enum';

@InputType()
export class RoleCreateManypermissionsInput {

    @Field(() => [Permission], {nullable:false})
    set!: Array<keyof typeof Permission>;
}
