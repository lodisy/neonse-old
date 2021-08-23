import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandCreateManyInput } from './brand-create-many.input';

@ArgsType()
export class CreateManyBrandArgs {

    @Field(() => [BrandCreateManyInput], {nullable:false})
    data!: Array<BrandCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
