import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileType } from './file-type.enum'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumFileTypeFilter } from './nested-enum-file-type-filter.input'

@InputType()
export class NestedEnumFileTypeWithAggregatesFilter {
    @Field(() => FileType, { nullable: true })
    equals?: keyof typeof FileType;

    @Field(() => [FileType], { nullable: true })
    in?: Array<keyof typeof FileType>

    @Field(() => [FileType], { nullable: true })
    notIn?: Array<keyof typeof FileType>

    @Field(() => NestedEnumFileTypeWithAggregatesFilter, { nullable: true })
    not?: NestedEnumFileTypeWithAggregatesFilter

    @Field(() => NestedIntFilter, { nullable: true })
    _count?: NestedIntFilter

    @Field(() => NestedIntFilter, { nullable: true })
    count?: NestedIntFilter

    @Field(() => NestedEnumFileTypeFilter, { nullable: true })
    _min?: NestedEnumFileTypeFilter

    @Field(() => NestedEnumFileTypeFilter, { nullable: true })
    min?: NestedEnumFileTypeFilter

    @Field(() => NestedEnumFileTypeFilter, { nullable: true })
    _max?: NestedEnumFileTypeFilter

    @Field(() => NestedEnumFileTypeFilter, { nullable: true })
    max?: NestedEnumFileTypeFilter
}
