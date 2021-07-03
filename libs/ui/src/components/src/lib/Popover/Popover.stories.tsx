import { Meta, Story } from '@storybook/react'
import type { PopoverProps } from './Popover'
import { Popover } from './Popover'

export default {
    component: Popover,
    title: 'Components/Popover',
    argTypes: {
        status: {
            options: ['default', 'warning', 'error'],
            control: { type: 'select' },
        },
        side: {
            options: ['bottom', 'top', 'left', 'right'],
            control: { type: 'select' },
        },
    },
} as Meta

const Template: Story<PopoverProps> = (args) => (
    <Popover {...args} trigger={<span>Trigger Button</span>}>
        <div>Some texts inside</div>
    </Popover>
)

export const Default = Template.bind({})

Default.args = {
    status: 'default',
    side: 'bottom',
}
