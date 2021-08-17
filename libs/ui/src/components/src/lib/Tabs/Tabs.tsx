/**
 * TODO handle drag constraints
 */

import { styled } from '@neonse/ui-theme'
import * as ReactTabs from '@radix-ui/react-tabs'
import { AnimatePresence, AnimateSharedLayout, motion, PanInfo, Variants } from 'framer-motion'
import React from 'react'

type Tab = {
    title: React.ReactNode
    content: React.ReactNode
}

const StyledTabs = styled(ReactTabs.Root, {
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '$1',
    backgroundColor: '$background',
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
    },
})

const StyledTabList = styled(ReactTabs.List, {
    flexShrink: 0,
    display: 'flex',
    position: 'relative',
    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
    },
    backgroundColor: '$background',
    '&[data-state="active"]': {
        backgroundColor: '$backgroundActive',
    },
})

const StyledTab = styled(ReactTabs.Trigger, {
    cursor: 'pointer',
    flexShrink: 0,
    color: '$text',
    '& > :first-of-type': {
        padding: '$1 $2',
    },
    userSelect: 'none',
    '&:hover': { color: '$textContrast' },
    '&[data-state="active"]': {
        color: '$textContrast',
    },
})

const StyledContent = styled(motion.div, {
    flexGrow: 1,
    padding: '$2',
    color: '$text',
})

// animation

const variants: Variants = {
    enter: ({ direction, orientation }) => {
        return {
            [orientation === 'horizontal' ? 'x' : 'y']: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: ({ direction, orientation }) => {
        return {
            zIndex: 0,
            [orientation === 'horizontal' ? 'x' : 'y']: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 5000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

export type TabsProps = {
    title: string
    tabs: Tab[]
} & ReactTabs.TabsOwnProps

/**
 *
 * @param title - Aria label of the Tabs
 * @param tabs - Array of Tab
 *
 */
export const Tabs = ({ title = 'Tabs', orientation = 'horizontal', defaultValue, tabs, ...otherProps }: TabsProps) => {
    const [[page, direction], setPage] = React.useState([0, 0])

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <AnimateSharedLayout>
            <StyledTabs
                orientation={orientation}
                defaultValue={defaultValue}
                value={page.toString()}
                onValueChange={(value: string) => setPage([parseInt(value), parseInt(value) - page])}
                {...otherProps}
            >
                <StyledTabList aria-label={title}>
                    {tabs.map((tab, i) => (
                        <React.Fragment key={i}>
                            <StyledTab value={i.toString()}>
                                {tab.title}
                                {/* {i === page && <StyledIndicator data-orientation={orientation} />} */}
                            </StyledTab>
                        </React.Fragment>
                    ))}
                </StyledTabList>

                <AnimatePresence
                    initial={false}
                    custom={{
                        direction,
                        orientation,
                    }}
                >
                    <ReactTabs.Content
                        as={StyledContent}
                        value={page.toString()}
                        key={page}
                        custom={{
                            direction,
                            orientation,
                        }}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            [orientation === 'horizontal' ? 'x' : 'y']: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                duration: 2,
                            },
                            opacity: { duration: 0.3 },
                        }}
                        drag={orientation === 'horizontal' ? 'x' : 'y'}
                        dragConstraints={orientation === 'horizontal' ? { left: 0, right: 0 } : { top: 0, bottom: 0 }} // TODO
                        dragElastic={1}
                        onDragEnd={(e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
                            const swipe =
                                orientation === 'horizontal'
                                    ? swipePower(offset.x, velocity.x)
                                    : swipePower(offset.y, velocity.y)

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                        }}
                    >
                        {tabs[page].content}
                    </ReactTabs.Content>
                </AnimatePresence>
            </StyledTabs>
        </AnimateSharedLayout>
    )
}
