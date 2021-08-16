import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateInput } from './like-create.input';
import { LikeUpdateInput } from './like-update.input';

@ArgsType()
export class UpsertOneLikeArgs {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateInput, {nullable:false})
    create!: LikeCreateInput;

    @Field(() => LikeUpdateInput, {nullable:false})
    update!: LikeUpdateInput;
}
