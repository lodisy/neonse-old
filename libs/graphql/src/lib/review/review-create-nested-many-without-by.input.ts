import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutByInput } from './review-create-without-by.input';
import { ReviewCreateOrConnectWithoutByInput } from './review-create-or-connect-without-by.input';
import { ReviewCreateManyByInputEnvelope } from './review-create-many-by-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutByInput {

    @Field(() => [ReviewCreateWithoutByInput], {nullable:true})
    create?: Array<ReviewCreateWithoutByInput>;

    @Field(() => [ReviewCreateOrConnectWithoutByInput], {nullable:true})
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutByInput>;

    @Field(() => ReviewCreateManyByInputEnvelope, {nullable:true})
    createMany?: ReviewCreateManyByInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewWhereUniqueInput>;
}
