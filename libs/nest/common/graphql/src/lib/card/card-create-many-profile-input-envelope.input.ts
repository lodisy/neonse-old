import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateManyProfileInput } from './card-create-many-profile.input';

@InputType()
export class CardCreateManyProfileInputEnvelope {

    @Field(() => [CardCreateManyProfileInput], {nullable:false})
    data!: Array<CardCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
