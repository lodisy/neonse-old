import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CardCreateManyCardHolderInput } from './card-create-many-card-holder.input'

@InputType()
export class CardCreateManyCardHolderInputEnvelope {
    @Field(() => [CardCreateManyCardHolderInput], { nullable: false })
    data!: Array<CardCreateManyCardHolderInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
