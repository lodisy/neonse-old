import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeUpdateInput } from './like-update.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@ArgsType()
export class UpdateOneLikeArgs {

    @Field(() => LikeUpdateInput, {nullable:false})
    data!: LikeUpdateInput;

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: LikeWhereUniqueInput;
}
