import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocaleCreateInput } from './locale-create.input';

@ArgsType()
export class CreateOneLocaleArgs {

    @Field(() => LocaleCreateInput, {nullable:false})
    data!: LocaleCreateInput;
}
