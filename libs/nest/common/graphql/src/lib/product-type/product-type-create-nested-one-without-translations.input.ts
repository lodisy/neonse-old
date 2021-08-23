import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeCreateWithoutTranslationsInput } from './product-type-create-without-translations.input';
import { ProductTypeCreateOrConnectWithoutTranslationsInput } from './product-type-create-or-connect-without-translations.input';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';

@InputType()
export class ProductTypeCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductTypeCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductTypeCreateWithoutTranslationsInput;

    @Field(() => ProductTypeCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductTypeCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductTypeWhereUniqueInput, {nullable:true})
    connect?: ProductTypeWhereUniqueInput;
}
