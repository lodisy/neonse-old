import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardUpdateManyMutationInput } from './card-update-many-mutation.input';
import { CardWhereInput } from './card-where.input';

@ArgsType()
export class UpdateManyCardArgs {

    @Field(() => CardUpdateManyMutationInput, {nullable:false})
    data!: CardUpdateManyMutationInput;

    @Field(() => CardWhereInput, {nullable:true})
    where?: CardWhereInput;
}
