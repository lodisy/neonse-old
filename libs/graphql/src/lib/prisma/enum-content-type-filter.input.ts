import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.enum';
import { NestedEnumContentTypeFilter } from './nested-enum-content-type-filter.input';

@InputType()
export class EnumContentTypeFilter {

    @Field(() => ContentType, {nullable:true})
    equals?: keyof typeof ContentType;

    @Field(() => [ContentType], {nullable:true})
    in?: Array<keyof typeof ContentType>;

    @Field(() => [ContentType], {nullable:true})
    notIn?: Array<keyof typeof ContentType>;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    not?: NestedEnumContentTypeFilter;
}
