import { styled } from '@neonse/ui/theme'
import React from 'react'
import { Portal } from '../Portal'

const StyledCursor = styled('div', {
    border: '2px solid yellow',
    position: 'fixed',
    size: 40,
    borderRadius: '$round',
    zIndex: '$highest',
    pointerEvents: 'none',
    transition: 'all 150ms ease',
    transitionProperty: 'background-color, opacity, transform, mix-blend-mode',
    mixBlendMode: 'difference',
    variants: {
        clicked: {
            true: {
                transform: 'translate(-50%, -50%) scale(0.9)',
                backgroundColor: '$background',
            },
            false: {
                transform: 'translate(-50%, -50%) scale(1)',
                backgroundColor: 'transparent',
            },
        },
        hovered: {
            true: {
                transform: 'scale(1.25)',
                backgroundColor: '$background',
            },
            false: {
                transform: 'scale(1)',
                backgroundColor: 'transparent',
            },
        },
        hidden: {
            true: {
                opacity: 0,
            },
            false: {
                opacity: 1,
            },
        },
    },
})

export const Cursor = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [clicked, setClicked] = React.useState(false)
    const [linkHovered, setLinkHovered] = React.useState(false)
    const [hidden, setHidden] = React.useState(false)

    const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
    }

    const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.removeEventListener('mousedown', onMouseDown)
        document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
        setClicked(true)
    }

    const onMouseUp = () => {
        setClicked(false)
    }

    const onMouseLeave = () => {
        setHidden(true)
    }

    const onMouseEnter = () => {
        setHidden(false)
    }

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('mouseover', () => setLinkHovered(true))
            el.addEventListener('mouseout', () => setLinkHovered(false))
        })
    }

    React.useEffect(() => {
        addEventListeners()
        handleLinkHoverEvents()
        return () => removeEventListeners()
    })

    return (
        <Portal>
            <StyledCursor
                id="cursor"
                css={{
                    left: position.x,
                    top: position.y,
                }}
                clicked={clicked}
                hovered={linkHovered}
                hidden={hidden}
            />
        </Portal>
    )
}
