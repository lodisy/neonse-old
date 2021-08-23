import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutReviewInput } from './file-create-without-review.input';

@InputType()
export class FileCreateOrConnectWithoutReviewInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutReviewInput, {nullable:false})
    create!: FileCreateWithoutReviewInput;
}
