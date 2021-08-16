import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutReviewInput } from './file-update-without-review.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutReviewInput, {nullable:false})
    data!: FileUpdateWithoutReviewInput;
}
