/**
 * TODO styling, can be used as expaned menu
 */

import { styled } from '@neonse/ui-theme'
import * as ReactAccordion from '@radix-ui/react-accordion'
import * as Polymorphic from '@radix-ui/react-polymorphic'
import React from 'react'

const StyledAccordion = styled(ReactAccordion.Root, {})

const StyledItem = styled(ReactAccordion.Item, {
    borderTop: '1px solid $solidBackground',

    '&:last-of-type': {
        borderBottom: '1px solid $solidBackground',
    },
})

const StyledHeader = styled(ReactAccordion.Header, {
    all: 'unset',
})

const StyledButton = styled(ReactAccordion.Trigger, {
    all: 'unset',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$2',
    color: '$textContrast',
    width: '100%',

    '@hover': {
        '&:hover': {
            backgroundColor: '$slate2',
        },
    },

    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
    },

    svg: {
        transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
    },

    '&[data-state="open"]': {
        svg: {
            transform: 'rotate(180deg)',
        },
    },
})

const StyledContent = styled(ReactAccordion.Content, {
    padding: '$2',
})

type AccordionButtonOwnProps = Polymorphic.OwnProps<typeof ReactAccordion.Trigger> & {
    css?: any
}

type AccordionButtonComponent = Polymorphic.ForwardRefComponent<
    Polymorphic.IntrinsicElement<typeof ReactAccordion.Trigger>,
    AccordionButtonOwnProps
>

const AccordionButton = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <StyledHeader>
        <StyledButton {...props} ref={forwardedRef}>
            {children}
        </StyledButton>
    </StyledHeader>
)) as AccordionButtonComponent

export const Root = StyledAccordion
export const Trigger = AccordionButton
export const Content = StyledContent
export const Header = StyledHeader
export const Item = StyledItem
