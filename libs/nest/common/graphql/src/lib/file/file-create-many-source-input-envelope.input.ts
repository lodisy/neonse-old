import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManySourceInput } from './file-create-many-source.input';

@InputType()
export class FileCreateManySourceInputEnvelope {

    @Field(() => [FileCreateManySourceInput], {nullable:false})
    data!: Array<FileCreateManySourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
