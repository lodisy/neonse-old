import { styled } from '@neonse/ui/theme'
import * as ReactPopover from '@radix-ui/react-popover'
import React from 'react'
import { Portal } from '../Portal'

const StyledContent = styled(ReactPopover.PopoverContent, {
    fontSize: '$xs',
    padding: '$2',
    borderRadius: '$1',

    variants: {
        status: {
            default: {
                color: '$paragraphSecondary',
                backgroundColor: '$backgroundSecondary',
            },
            error: {
                color: '$errorText',
                backgroundColor: '$errorBackground',
            },
            warning: {
                color: '$warningText',
                backgroundColor: '$warningBackground',
            },
        },
    },
})

const StyledArrow = styled(ReactPopover.Arrow, {
    fill: '$backgroundSecondary',
    '&:[data-status="error"]': {
        fill: '$errorBackground',
    },
    '&:[data-status="warning"]': {
        fill: '$warningBackground',
    },
})

export type PopoverProps = {
    trigger: React.ReactElement
    children: React.ReactNode
    isOpen?: boolean
    onOpenChange?: (isOpen: boolean) => void
    status?: 'default' | 'error' | 'warning'
} & ReactPopover.PopoverContentOwnProps

export const Popover = ({
    trigger,
    children,
    isOpen,
    onOpenChange,
    status = 'default',
    ...otherProps
}: PopoverProps) => {
    return (
        <ReactPopover.Root open={isOpen} onOpenChange={onOpenChange}>
            <ReactPopover.Trigger>{trigger}</ReactPopover.Trigger>
            <Portal>
                <StyledContent status={status} portalled={false} data-status={status} {...otherProps}>
                    {children}
                    <StyledArrow data-status={status} />
                </StyledContent>
            </Portal>
        </ReactPopover.Root>
    )
}
