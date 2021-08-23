import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutReviewInput } from './file-create-without-review.input';
import { FileCreateOrConnectWithoutReviewInput } from './file-create-or-connect-without-review.input';
import { FileCreateManyReviewInputEnvelope } from './file-create-many-review-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutReviewInput {

    @Field(() => [FileCreateWithoutReviewInput], {nullable:true})
    create?: Array<FileCreateWithoutReviewInput>;

    @Field(() => [FileCreateOrConnectWithoutReviewInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutReviewInput>;

    @Field(() => FileCreateManyReviewInputEnvelope, {nullable:true})
    createMany?: FileCreateManyReviewInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}
