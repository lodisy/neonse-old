import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutFoundersInput } from './brand-create-without-founders.input';
import { BrandCreateOrConnectWithoutFoundersInput } from './brand-create-or-connect-without-founders.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandCreateNestedManyWithoutFoundersInput {

    @Field(() => [BrandCreateWithoutFoundersInput], {nullable:true})
    create?: Array<BrandCreateWithoutFoundersInput>;

    @Field(() => [BrandCreateOrConnectWithoutFoundersInput], {nullable:true})
    connectOrCreate?: Array<BrandCreateOrConnectWithoutFoundersInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    connect?: Array<BrandWhereUniqueInput>;
}
