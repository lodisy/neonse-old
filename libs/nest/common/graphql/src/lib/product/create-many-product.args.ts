import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCreateManyInput } from './product-create-many.input';

@ArgsType()
export class CreateManyProductArgs {

    @Field(() => [ProductCreateManyInput], {nullable:false})
    data!: Array<ProductCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
