import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeCreateInput } from './like-create.input';

@ArgsType()
export class CreateOneLikeArgs {

    @Field(() => LikeCreateInput, {nullable:false})
    data!: LikeCreateInput;
}
