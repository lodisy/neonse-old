import { styled } from '@neonse/ui/theme'
import * as ReactTooltip from '@radix-ui/react-tooltip'
import React from 'react'
import { Portal } from '../Portal'
import { Slot } from '@radix-ui/react-slot'

const StyledContent = styled('div', {
    backgroundColor: '$background',
    fontSize: '$xs',
    color: '$text',
    padding: '5px 10px',
})

export type TooltipProps = {
    children: React.ReactNode
    content: React.ReactNode
    disableArrow?: boolean
} & Omit<ReactTooltip.TooltipContentImplOwnProps, 'portalled'>

export const Tooltip = ({ children, content, disableArrow = false, ...otherProps }: TooltipProps) => {
    return (
        <ReactTooltip.Root delayDuration={0}>
            <ReactTooltip.Trigger as={Slot}>{children}</ReactTooltip.Trigger>
            <Portal>
                <ReactTooltip.Content portalled={false} as={StyledContent} {...otherProps}>
                    {content}
                    {!disableArrow && <ReactTooltip.Arrow />}
                </ReactTooltip.Content>
            </Portal>
        </ReactTooltip.Root>
    )
}
