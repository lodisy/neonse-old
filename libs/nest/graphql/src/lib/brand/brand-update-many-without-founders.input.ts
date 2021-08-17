import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandCreateWithoutFoundersInput } from './brand-create-without-founders.input'
import { BrandCreateOrConnectWithoutFoundersInput } from './brand-create-or-connect-without-founders.input'
import { BrandUpsertWithWhereUniqueWithoutFoundersInput } from './brand-upsert-with-where-unique-without-founders.input'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandUpdateWithWhereUniqueWithoutFoundersInput } from './brand-update-with-where-unique-without-founders.input'
import { BrandUpdateManyWithWhereWithoutFoundersInput } from './brand-update-many-with-where-without-founders.input'
import { BrandScalarWhereInput } from './brand-scalar-where.input'

@InputType()
export class BrandUpdateManyWithoutFoundersInput {
    @Field(() => [BrandCreateWithoutFoundersInput], { nullable: true })
    create?: Array<BrandCreateWithoutFoundersInput>

    @Field(() => [BrandCreateOrConnectWithoutFoundersInput], { nullable: true })
    connectOrCreate?: Array<BrandCreateOrConnectWithoutFoundersInput>

    @Field(() => [BrandUpsertWithWhereUniqueWithoutFoundersInput], { nullable: true })
    upsert?: Array<BrandUpsertWithWhereUniqueWithoutFoundersInput>

    @Field(() => [BrandWhereUniqueInput], { nullable: true })
    connect?: Array<BrandWhereUniqueInput>

    @Field(() => [BrandWhereUniqueInput], { nullable: true })
    set?: Array<BrandWhereUniqueInput>

    @Field(() => [BrandWhereUniqueInput], { nullable: true })
    disconnect?: Array<BrandWhereUniqueInput>

    @Field(() => [BrandWhereUniqueInput], { nullable: true })
    delete?: Array<BrandWhereUniqueInput>

    @Field(() => [BrandUpdateWithWhereUniqueWithoutFoundersInput], { nullable: true })
    update?: Array<BrandUpdateWithWhereUniqueWithoutFoundersInput>

    @Field(() => [BrandUpdateManyWithWhereWithoutFoundersInput], { nullable: true })
    updateMany?: Array<BrandUpdateManyWithWhereWithoutFoundersInput>

    @Field(() => [BrandScalarWhereInput], { nullable: true })
    deleteMany?: Array<BrandScalarWhereInput>
}
