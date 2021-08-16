import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from './item-where-unique.input';

@ArgsType()
export class DeleteOneItemArgs {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    where!: ItemWhereUniqueInput;
}
