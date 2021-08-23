import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandUpdateManyMutationInput } from './brand-update-many-mutation.input';
import { BrandWhereInput } from './brand-where.input';

@ArgsType()
export class UpdateManyBrandArgs {

    @Field(() => BrandUpdateManyMutationInput, {nullable:false})
    data!: BrandUpdateManyMutationInput;

    @Field(() => BrandWhereInput, {nullable:true})
    where?: BrandWhereInput;
}
