import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from './file-type.enum';
import { NestedEnumFileTypeFilter } from './nested-enum-file-type-filter.input';

@InputType()
export class EnumFileTypeFilter {

    @Field(() => FileType, {nullable:true})
    equals?: keyof typeof FileType;

    @Field(() => [FileType], {nullable:true})
    in?: Array<keyof typeof FileType>;

    @Field(() => [FileType], {nullable:true})
    notIn?: Array<keyof typeof FileType>;

    @Field(() => NestedEnumFileTypeFilter, {nullable:true})
    not?: NestedEnumFileTypeFilter;
}
