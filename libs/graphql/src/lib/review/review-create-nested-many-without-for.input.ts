import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutForInput } from './review-create-without-for.input';
import { ReviewCreateOrConnectWithoutForInput } from './review-create-or-connect-without-for.input';
import { ReviewCreateManyForInputEnvelope } from './review-create-many-for-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutForInput {

    @Field(() => [ReviewCreateWithoutForInput], {nullable:true})
    create?: Array<ReviewCreateWithoutForInput>;

    @Field(() => [ReviewCreateOrConnectWithoutForInput], {nullable:true})
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutForInput>;

    @Field(() => ReviewCreateManyForInputEnvelope, {nullable:true})
    createMany?: ReviewCreateManyForInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewWhereUniqueInput>;
}
