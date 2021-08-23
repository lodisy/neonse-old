import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyByInput } from './like-create-many-by.input';

@InputType()
export class LikeCreateManyByInputEnvelope {

    @Field(() => [LikeCreateManyByInput], {nullable:false})
    data!: Array<LikeCreateManyByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
