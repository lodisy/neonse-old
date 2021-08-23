import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutTranslationsInput } from './product-create-without-translations.input';
import { ProductCreateOrConnectWithoutTranslationsInput } from './product-create-or-connect-without-translations.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductCreateWithoutTranslationsInput;

    @Field(() => ProductCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;
}
