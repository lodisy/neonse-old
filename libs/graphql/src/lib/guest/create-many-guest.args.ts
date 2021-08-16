import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestCreateManyInput } from './guest-create-many.input';

@ArgsType()
export class CreateManyGuestArgs {

    @Field(() => [GuestCreateManyInput], {nullable:false})
    data!: Array<GuestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
