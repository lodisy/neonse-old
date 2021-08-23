import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.enum';

@InputType()
export class NestedEnumContentTypeFilter {

    @Field(() => ContentType, {nullable:true})
    equals?: keyof typeof ContentType;

    @Field(() => [ContentType], {nullable:true})
    in?: Array<keyof typeof ContentType>;

    @Field(() => [ContentType], {nullable:true})
    notIn?: Array<keyof typeof ContentType>;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    not?: NestedEnumContentTypeFilter;
}
