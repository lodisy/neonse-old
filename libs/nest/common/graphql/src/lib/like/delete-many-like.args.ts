import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';

@ArgsType()
export class DeleteManyLikeArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    where?: LikeWhereInput;
}
