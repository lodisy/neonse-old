import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTranslationWhereInput } from './product-translation-where.input';
import { ProductTranslationOrderByInput } from './product-translation-order-by.input';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTranslationScalarFieldEnum } from './product-translation-scalar-field.enum';

@ArgsType()
export class FindManyProductTranslationArgs {

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    where?: ProductTranslationWhereInput;

    @Field(() => [ProductTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductTranslationOrderByInput>;

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductTranslationScalarFieldEnum>;
}
