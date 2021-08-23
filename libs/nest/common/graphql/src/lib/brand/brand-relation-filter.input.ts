import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';

@InputType()
export class BrandRelationFilter {

    @Field(() => BrandWhereInput, {nullable:true})
    is?: BrandWhereInput;

    @Field(() => BrandWhereInput, {nullable:true})
    isNot?: BrandWhereInput;
}
