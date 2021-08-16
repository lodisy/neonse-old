import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemCreateInput } from './item-create.input';
import { ItemUpdateInput } from './item-update.input';

@ArgsType()
export class UpsertOneItemArgs {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    where!: ItemWhereUniqueInput;

    @Field(() => ItemCreateInput, {nullable:false})
    create!: ItemCreateInput;

    @Field(() => ItemUpdateInput, {nullable:false})
    update!: ItemUpdateInput;
}
