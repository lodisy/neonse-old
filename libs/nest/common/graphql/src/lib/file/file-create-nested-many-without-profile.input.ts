import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProfileInput } from './file-create-without-profile.input';
import { FileCreateOrConnectWithoutProfileInput } from './file-create-or-connect-without-profile.input';
import { FileCreateManyProfileInputEnvelope } from './file-create-many-profile-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutProfileInput {

    @Field(() => [FileCreateWithoutProfileInput], {nullable:true})
    create?: Array<FileCreateWithoutProfileInput>;

    @Field(() => [FileCreateOrConnectWithoutProfileInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutProfileInput>;

    @Field(() => FileCreateManyProfileInputEnvelope, {nullable:true})
    createMany?: FileCreateManyProfileInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}
