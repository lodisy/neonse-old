import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoleTranslationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
