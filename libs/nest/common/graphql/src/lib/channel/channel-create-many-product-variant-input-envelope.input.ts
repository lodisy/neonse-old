import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateManyProductVariantInput } from './channel-create-many-product-variant.input';

@InputType()
export class ChannelCreateManyProductVariantInputEnvelope {

    @Field(() => [ChannelCreateManyProductVariantInput], {nullable:false})
    data!: Array<ChannelCreateManyProductVariantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
