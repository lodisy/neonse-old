import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyByInput } from './comment-create-many-by.input';

@InputType()
export class CommentCreateManyByInputEnvelope {

    @Field(() => [CommentCreateManyByInput], {nullable:false})
    data!: Array<CommentCreateManyByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
