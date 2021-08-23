import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';

@ArgsType()
export class DeleteManyBrandArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    where?: BrandWhereInput;
}
