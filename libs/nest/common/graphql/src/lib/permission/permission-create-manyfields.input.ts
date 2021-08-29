import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionCreateManyfieldsInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
