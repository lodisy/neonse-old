import { AlipayIcon, StripeIcon, WechatPayIcon } from '@neonse/ui/icons'
import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { ChoiceGroupProps, ChoiceType } from './ChoiceGroup'
import { ChoiceGroup } from './ChoiceGroup'

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
] as ChoiceType[]

const Template: Story<ChoiceGroupProps> = (args) => <ChoiceGroup {...args} />

export const Horizontal = Template.bind({})

Horizontal.args = {
    choices: choices,
}

export const Vertical = Template.bind({})

Vertical.args = {
    choices: choices,
    orientation: 'vertical',
}
