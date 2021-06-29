import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { ScrollAreaProps } from './ScrollArea'
import { ScrollArea } from './ScrollArea'

export default {
    component: ScrollArea,
    title: 'ScrollArea',
} as Meta

const Template: Story<ScrollAreaProps> = (args) => (
    <div style={{ height: 250, width: 400 }}>
        <ScrollArea {...args} />
    </div>
)

const children = (
    <>
        <div
            style={{
                width: '1000',
                height: 1000,
                backgroundColor: 'pink',
            }}
        >
            some texts
        </div>
        <div
            style={{
                width: '1000',
                height: 1000,
                backgroundColor: 'red',
            }}
        >
            some texts
        </div>
    </>
)

export const Horizontal = Template.bind({})

Horizontal.args = {
    orientation: 'horizontal',
    children: children,
}

export const Vertical = Template.bind({})

Vertical.args = {
    orientation: 'vertical',
    children: children,
}
