import { styled } from '@neonse/ui/theme'
import * as Collapsible from '@radix-ui/react-collapsible'
import { motion } from 'framer-motion'
import React from 'react'

const StyledRoot = styled('div', {})

const StyledTrigger = styled('div', {})

const StyledContent = styled(motion.div, {
    padding: '$2',
})

export type CardProps = {
    children: React.ReactElement
    collapsible?: boolean
    content?: React.ReactElement
} & Omit<Collapsible.CollapsibleOwnProps, 'disabled'>

export const Card = ({ children, content, collapsible = false, ...otherProps }: CardProps) => {
    return (
        <Collapsible.Root as={StyledRoot} {...otherProps} disabled={!collapsible}>
            <Collapsible.Trigger as={StyledTrigger}>{children}</Collapsible.Trigger>
            <Collapsible.CollapsibleContent as={StyledContent}>{content}</Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}
