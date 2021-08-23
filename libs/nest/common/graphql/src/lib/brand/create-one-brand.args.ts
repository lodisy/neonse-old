import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandCreateInput } from './brand-create.input';

@ArgsType()
export class CreateOneBrandArgs {

    @Field(() => BrandCreateInput, {nullable:false})
    data!: BrandCreateInput;
}
