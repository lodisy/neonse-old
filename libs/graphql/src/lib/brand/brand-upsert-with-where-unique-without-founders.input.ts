import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateWithoutFoundersInput } from './brand-update-without-founders.input';
import { BrandCreateWithoutFoundersInput } from './brand-create-without-founders.input';

@InputType()
export class BrandUpsertWithWhereUniqueWithoutFoundersInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: BrandWhereUniqueInput;

    @Field(() => BrandUpdateWithoutFoundersInput, {nullable:false})
    update!: BrandUpdateWithoutFoundersInput;

    @Field(() => BrandCreateWithoutFoundersInput, {nullable:false})
    create!: BrandCreateWithoutFoundersInput;
}
