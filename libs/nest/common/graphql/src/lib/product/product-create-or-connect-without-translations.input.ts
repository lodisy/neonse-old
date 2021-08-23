import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutTranslationsInput } from './product-create-without-translations.input';

@InputType()
export class ProductCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductCreateWithoutTranslationsInput;
}
