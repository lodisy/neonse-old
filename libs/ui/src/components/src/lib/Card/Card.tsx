import { styled } from '@neonse/ui-theme'
import * as Collapsible from '@radix-ui/react-collapsible'
import { animated, useTransition } from '@react-spring/web'
import React from 'react'

const StyledTrigger = styled('div', {})

const StyledCard = styled('div', {
    appearance: 'none',
    border: 'none',
    boxSizing: 'border-box',
    font: 'inherit',
    lineHeight: '1',
    outline: 'none',
    padding: 0,
    textAlign: 'inherit',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    backgroundColor: '$background',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    flexShrink: 0,
    borderRadius: '$2',
    position: 'relative',

    '&::before': {
        boxSizing: 'border-box',
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        borderRadius: '$2',
        pointerEvents: 'none',
    },

    variants: {
        variant: {
            interactive: {
                '@hover': {
                    '&:hover': {
                        '&::before': {
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.2)',
                        },
                    },
                },
                '&:focus': {
                    '&::before': {
                        // boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                    },
                },
            },
            ghost: {
                backgroundColor: 'transparent',
                transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
                willChange: 'transform',
                '&::before': {
                    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
                    opacity: '0',
                    transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
                },
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$background',
                        transform: 'translateY(-2px)',
                        '&::before': {
                            opacity: '1',
                        },
                    },
                },
                '&:active': {
                    transform: 'translateY(0)',
                    transition: 'none',
                    '&::before': {
                        boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
                        opacity: '1',
                    },
                },
                '&:focus': {
                    // boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
            },
            active: {
                transform: 'translateY(0)',
                transition: 'none',
                '&::before': {
                    boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
                    opacity: '1',
                },
                // '&:focus': {
                //     boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                // },
            },
        },
    },
})

const StyledContent = styled(animated.div, {
    padding: '$2',
})

export type CardProps = {
    children: React.ReactElement
    collapsible?: boolean
    content?: React.ReactElement
} & Omit<Collapsible.CollapsibleOwnProps, 'disabled'>

export const Card = ({
    children,
    content,
    collapsible = false,
    defaultOpen = false,
    open,
    onOpenChange,
    ...otherProps
}: CardProps) => {
    const [isOpen, setOpen] = React.useState(open || defaultOpen)

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen)
        onOpenChange && onOpenChange(isOpen)
    }

    // animation

    const transitions = useTransition(isOpen, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
    })

    return (
        <>
            {collapsible ? (
                <Collapsible.Root
                    {...otherProps}
                    disabled={!collapsible}
                    defaultOpen={defaultOpen}
                    open={isOpen}
                    onOpenChange={handleOpenChange}
                >
                    <Collapsible.Trigger as={StyledTrigger}>{children}</Collapsible.Trigger>
                    {transitions((style, isOpen) => (
                        <Collapsible.CollapsibleContent as={StyledContent} style={style}>
                            {content}
                        </Collapsible.CollapsibleContent>
                    ))}
                </Collapsible.Root>
            ) : (
                <StyledCard>{children}</StyledCard>
            )}
        </>
    )
}
