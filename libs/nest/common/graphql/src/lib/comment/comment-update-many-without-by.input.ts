import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutByInput } from './comment-create-without-by.input';
import { CommentCreateOrConnectWithoutByInput } from './comment-create-or-connect-without-by.input';
import { CommentUpsertWithWhereUniqueWithoutByInput } from './comment-upsert-with-where-unique-without-by.input';
import { CommentCreateManyByInputEnvelope } from './comment-create-many-by-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutByInput } from './comment-update-with-where-unique-without-by.input';
import { CommentUpdateManyWithWhereWithoutByInput } from './comment-update-many-with-where-without-by.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutByInput {

    @Field(() => [CommentCreateWithoutByInput], {nullable:true})
    create?: Array<CommentCreateWithoutByInput>;

    @Field(() => [CommentCreateOrConnectWithoutByInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutByInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutByInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutByInput>;

    @Field(() => CommentCreateManyByInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyByInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutByInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutByInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutByInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutByInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}
