import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeWhereInput } from './product-type-where.input';

@InputType()
export class ProductTypeRelationFilter {

    @Field(() => ProductTypeWhereInput, {nullable:true})
    is?: ProductTypeWhereInput;

    @Field(() => ProductTypeWhereInput, {nullable:true})
    isNot?: ProductTypeWhereInput;
}
