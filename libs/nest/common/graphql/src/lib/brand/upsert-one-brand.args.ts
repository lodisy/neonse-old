import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandCreateInput } from './brand-create.input';
import { BrandUpdateInput } from './brand-update.input';

@ArgsType()
export class UpsertOneBrandArgs {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: BrandWhereUniqueInput;

    @Field(() => BrandCreateInput, {nullable:false})
    create!: BrandCreateInput;

    @Field(() => BrandUpdateInput, {nullable:false})
    update!: BrandUpdateInput;
}
