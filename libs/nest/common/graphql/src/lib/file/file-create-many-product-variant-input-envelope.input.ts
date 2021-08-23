import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyProductVariantInput } from './file-create-many-product-variant.input';

@InputType()
export class FileCreateManyProductVariantInputEnvelope {

    @Field(() => [FileCreateManyProductVariantInput], {nullable:false})
    data!: Array<FileCreateManyProductVariantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
