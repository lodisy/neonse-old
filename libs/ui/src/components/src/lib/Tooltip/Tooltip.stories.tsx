import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import type { TooltipProps } from './Tooltip'
import { Tooltip } from './Tooltip'

export default {
    component: Tooltip,
    title: 'Tooltip',
} as Meta

export const Default = () => (
    <Tooltip content={<div>some texts inside</div>}>
        <button>Trigger</button>
    </Tooltip>
)
