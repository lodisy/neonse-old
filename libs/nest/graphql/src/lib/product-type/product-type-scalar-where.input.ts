import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'

@InputType()
export class ProductTypeScalarWhereInput {
    @Field(() => [ProductTypeScalarWhereInput], { nullable: true })
    AND?: Array<ProductTypeScalarWhereInput>

    @Field(() => [ProductTypeScalarWhereInput], { nullable: true })
    OR?: Array<ProductTypeScalarWhereInput>

    @Field(() => [ProductTypeScalarWhereInput], { nullable: true })
    NOT?: Array<ProductTypeScalarWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    slug?: StringFilter
}
