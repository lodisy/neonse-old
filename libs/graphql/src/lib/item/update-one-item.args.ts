import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemUpdateInput } from './item-update.input';
import { ItemWhereUniqueInput } from './item-where-unique.input';

@ArgsType()
export class UpdateOneItemArgs {

    @Field(() => ItemUpdateInput, {nullable:false})
    data!: ItemUpdateInput;

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    where!: ItemWhereUniqueInput;
}
