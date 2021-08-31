import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyByInput } from './message-create-many-by.input';

@InputType()
export class MessageCreateManyByInputEnvelope {

    @Field(() => [MessageCreateManyByInput], {nullable:false})
    data!: Array<MessageCreateManyByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
