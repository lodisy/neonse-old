import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from './file-type.enum';

@InputType()
export class NestedEnumFileTypeFilter {

    @Field(() => FileType, {nullable:true})
    equals?: keyof typeof FileType;

    @Field(() => [FileType], {nullable:true})
    in?: Array<keyof typeof FileType>;

    @Field(() => [FileType], {nullable:true})
    notIn?: Array<keyof typeof FileType>;

    @Field(() => NestedEnumFileTypeFilter, {nullable:true})
    not?: NestedEnumFileTypeFilter;
}
