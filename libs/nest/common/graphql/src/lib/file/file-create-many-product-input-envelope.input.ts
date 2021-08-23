import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyProductInput } from './file-create-many-product.input';

@InputType()
export class FileCreateManyProductInputEnvelope {

    @Field(() => [FileCreateManyProductInput], {nullable:false})
    data!: Array<FileCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
