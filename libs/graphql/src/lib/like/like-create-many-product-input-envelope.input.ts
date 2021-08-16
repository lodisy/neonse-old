import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyProductInput } from './like-create-many-product.input';

@InputType()
export class LikeCreateManyProductInputEnvelope {

    @Field(() => [LikeCreateManyProductInput], {nullable:false})
    data!: Array<LikeCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
