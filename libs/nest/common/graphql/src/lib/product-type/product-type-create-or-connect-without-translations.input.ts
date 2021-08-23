import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { ProductTypeCreateWithoutTranslationsInput } from './product-type-create-without-translations.input';

@InputType()
export class ProductTypeCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductTypeWhereUniqueInput, {nullable:false})
    where!: ProductTypeWhereUniqueInput;

    @Field(() => ProductTypeCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductTypeCreateWithoutTranslationsInput;
}
