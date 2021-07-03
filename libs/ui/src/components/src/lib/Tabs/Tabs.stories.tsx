import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { TabsProps } from './Tabs'
import { Tabs } from './Tabs'

export default {
    component: Tabs,
    title: 'Components/Tabs',
} as Meta

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

const tabs = [
    {
        title: <div>Tab 1</div>,
        content: <div>Tab 1</div>,
    },
    {
        title: <div>Tab 2</div>,
        content: <div>Tab 2</div>,
    },
    {
        title: <div>Tab 3</div>,
        content: <div>Tab 3</div>,
    },
]

export const Horizontal = Template.bind({})

Horizontal.args = {
    title: 'Horizotal Tabs',
    tabs: tabs,
}

export const Vertical = Template.bind({})

Vertical.args = {
    title: 'Vertical Tabs',
    orientation: 'vertical',
    tabs: tabs,
}
