import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { RadioGroupProps } from './RadioGroup'
import { RadioGroup } from './RadioGroup'

export default {
    component: RadioGroup,
    title: 'RadioGroup',
} as Meta

const radios = ['cat', 'dog', 'fish']

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />

export const Horizontal = Template.bind({})

Horizontal.args = {
    orientation: 'horizontal',
    radios: radios,
}

export const Vertical = Template.bind({})

Vertical.args = {
    orientation: 'vertical',
    radios: radios,
}
