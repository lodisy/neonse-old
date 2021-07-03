import { AlipayIcon, StripeIcon, WechatPayIcon } from '@neonse/ui/icons'
import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { ChoiceGroupProps } from './ChoiceGroup'
import { Choice, ChoiceGroup } from './ChoiceGroup'

export default {
    component: ChoiceGroup,
    title: 'Components/ChoiceGroup',
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            type: 'select',
        },
    },
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
    orientation: 'vertical',
}
