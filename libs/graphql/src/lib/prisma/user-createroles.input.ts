import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';

@InputType()
export class UserCreaterolesInput {

    @Field(() => [Role], {nullable:false})
    set!: Array<keyof typeof Role>;
}
