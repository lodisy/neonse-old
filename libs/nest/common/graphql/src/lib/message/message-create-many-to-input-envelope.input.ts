import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyToInput } from './message-create-many-to.input';

@InputType()
export class MessageCreateManyToInputEnvelope {

    @Field(() => [MessageCreateManyToInput], {nullable:false})
    data!: Array<MessageCreateManyToInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
