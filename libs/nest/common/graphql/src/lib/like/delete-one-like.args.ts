import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@ArgsType()
export class DeleteOneLikeArgs {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: LikeWhereUniqueInput;
}
