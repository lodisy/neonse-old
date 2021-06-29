import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import { AlipayIcon } from '../../assets/icons/AlipayIcon'
import { StripeIcon } from '../../assets/icons/StripeIcon'
import { WechatPayIcon } from '../../assets/icons/WechatPayIcon'
import type { ChoiceGroupProps } from './ChoiceGroup'
import { Choice, ChoiceGroup } from './ChoiceGroup'

export default {
    component: ChoiceGroup,
    title: 'ChoiceGroup',
} as Meta

const choices = [
    {
        label: <StripeIcon />,
        value: 'stripe',
    },
    {
        label: <AlipayIcon />,
        value: 'alipay',
    },
    {
        label: <WechatPayIcon />,
        value: 'wechat',
    },
] as Choice[]

const Template: Story<ChoiceGroupProps> = (args) => (
    <div
        style={{
            width: 400,
            height: 300,
        }}
    >
        <ChoiceGroup {...args} />
    </div>
)

export const Horizontal = Template.bind({})

Horizontal.args = {
    choices: choices,
}

export const Vertical = Template.bind({})

Vertical.args = {
    choices: choices,
}
