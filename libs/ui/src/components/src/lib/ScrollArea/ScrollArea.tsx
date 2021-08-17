/**
 * TODO adjust css
 */

import { styled } from '@neonse/ui-theme'
import * as ReactScrollArea from '@radix-ui/react-scroll-area'
import 'keen-slider/keen-slider.min.css'
import React from 'react'
const StyledScrollArea = styled(ReactScrollArea.Root, {
    width: '100%',
    height: '100%',
})

const StyledViewport = styled(ReactScrollArea.Viewport, {
    width: '100%',
    height: '100%',
})
const StyledScrollbar = styled(ReactScrollArea.Scrollbar, {
    display: 'flex',
    padding: 1,
    background: 'rgba(0, 0, 0, 0.3)', // hsl to hsla
    '&:hover': {
        background: 'rgba(0, 0, 0, 0.8)',
    },
    transition: 'background 160ms ease-out',
    '&[data-orientation="vertical"]': {
        width: 1,
    },
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: 1,
    },
})

const StyledThumb = styled(ReactScrollArea.Thumb, {
    flex: 1,
    background: 'black',
    borderRadius: 1,
})

export type ScrollAreaProps = {
    children: React.ReactElement
} & ReactScrollArea.ScrollAreaScrollbarVisibleOwnProps

export const ScrollArea = ({ children, orientation = 'vertical' }: ScrollAreaProps) => {
    // animation

    return (
        <StyledScrollArea>
            <StyledViewport>{children}</StyledViewport>
            <StyledScrollbar orientation={orientation}>
                <StyledThumb />
            </StyledScrollbar>
        </StyledScrollArea>
    )
}
