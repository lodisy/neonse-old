import React, { useRef, useEffect } from 'react'
import { animated, useSpring, SpringConfig } from 'react-spring'
import { useDrag, rubberbandIfOutOfBounds } from '@use-gesture/react'
import { styled } from '@neonse/ui/theme'

const StyledCarousel = styled('div', {
    width: '80vw',
    overflow: 'hidden',
})

const StyledContainer = styled(animated.div, {
    height: '100%',
    width: '100%',
    touchAction: 'pan-y',
    display: 'flex',
    transformOrigin: '50% 50% 0%',
    cursor: 'grab',
})

const StyledItem = styled('div', {
    height: 150,
    borderRadius: '$1',
    backgroundColor: '$background',
    marginRight: 15,
    minWidth: 'calc(33.33% - 15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const fasterConfig: SpringConfig = {
    tension: 100,
    friction: 10,
    velocity: 20,
}

export type CarouselProps = {
    index?: number
    onIndexChange?: (index: number, isLast: boolean) => void
    children: React.ReactNode
    padding?: number
    springConfig?: SpringConfig
    rubberBandConst?: number
}

export const Carousel = ({
    index,
    children,
    onIndexChange,
    padding = 0,
    springConfig = fasterConfig,
    rubberBandConst = 0.2,
}: CarouselProps) => {
    const length = React.Children.count(children)

    const currentIndexRef = useRef(0)

    const [spring, api] = useSpring(() => ({
        x: 0,
        config: springConfig,
    }))

    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef(0.0)
    const itemWidth = useRef(0)

    const isLast = (maxScroll: number) => Math.abs(scrollRef.current - maxScroll + padding) < itemWidth.current

    // the scroll width of the slider
    const scrollWidth = () => containerRef.current?.scrollWidth || 0

    // this is the full width of the wrapper element
    const width = () => containerRef.current?.parentElement?.clientWidth || 0

    // determine the current index based on the current position
    const currentIndex = (ref = scrollRef.current) => Math.round(Math.abs(ref - padding) / (scrollWidth() / length))

    useEffect(() => {
        const container = containerRef.current

        const observer = new ResizeObserver((item) => {
            itemWidth.current = item[0].contentRect.width
            currentIndexRef.current = currentIndex()
            // reset position when the elements are resized
            const maxScroll = -(scrollWidth() - width())
            scrollRef.current = Math.max(
                -(scrollWidth() / length) * currentIndexRef.current + (currentIndexRef.current > 0 ? padding : 0),
                maxScroll,
            )
            if (onIndexChange) {
                onIndexChange(currentIndexRef.current, isLast(maxScroll))
            }
            api.update({
                x: currentIndexRef.current === 0 ? 0 : scrollRef.current,
                immediate: true,
            }).start()
        })

        // we observe only the first child, assuming all react the same way on width changes
        if (container && container.children.length > 0) {
            observer.observe(container.children[0])
        }
        return () => {
            observer.disconnect()
        }
    }, [containerRef, length, api, padding])

    useEffect(() => {
        scrollRef.current = 0
        currentIndexRef.current = 0
        const maxScroll = -(scrollWidth() - width())
        if (onIndexChange) {
            onIndexChange(currentIndexRef.current, isLast(maxScroll))
        }
        api.update({
            x: 0,
            immediate: true,
        }).start()
    }, [length, scrollRef, api, padding])

    useEffect(() => {
        if (index !== undefined && index !== currentIndexRef.current) {
            const maxScroll = -(scrollWidth() - width())
            scrollRef.current = Math.max(-(scrollWidth() / length) * index + (index > 0 ? padding : 0), maxScroll)
            currentIndexRef.current = index
            if (onIndexChange) {
                onIndexChange(currentIndexRef.current, isLast(maxScroll))
            }
            api.start({
                x: scrollRef.current,
            })
        }
    }, [index, api, scrollRef, padding])

    useDrag(
        ({ down, direction: [dX], delta: [deltaX], movement: [moveX], velocity: [vX] }) => {
            const thisWith = width()
            const thisScrollWidth = scrollWidth()

            // General movement
            scrollRef.current += deltaX

            const maxSlides = Math.ceil(thisScrollWidth / thisWith)

            const minOffset = itemWidth.current / 4
            const shouldSlide = Math.abs(moveX) > minOffset
            const isLeftEdgeBounce = scrollRef.current > 0

            // the maximum amount we are allowed to scroll
            const maxScroll = -(thisScrollWidth - thisWith)
            const isRightEdgeBounce = scrollRef.current < maxScroll

            // get nearest full slide based on the current position
            // we subtract some info based on the amount the user scrolled
            const thisIndex = currentIndex(scrollRef.current + dX * minOffset)
            // determine the next snap point
            const scrollNexSnap = Math.max(
                -(thisScrollWidth / length) * thisIndex + (thisIndex > 0 ? padding : 0),
                maxScroll,
            )

            // check resistance, and bounce back if not overcome
            if (!down && !shouldSlide) {
                scrollRef.current = scrollNexSnap
            }

            // check left edge
            if (!down && isLeftEdgeBounce) {
                scrollRef.current = 0
                currentIndexRef.current = 0
            }

            // check right edge
            if (!down && isRightEdgeBounce) {
                // it's possible that we drag so much that we "skip" slides, that's why we
                // use the minimum of our max slides here
                currentIndexRef.current = Math.min(thisIndex, maxSlides - 1)
                scrollRef.current = currentIndexRef.current === 0 ? 0 : maxScroll
            }

            // all good and we can scroll
            if (!down && !isLeftEdgeBounce && !isRightEdgeBounce && shouldSlide) {
                // it's possible that there is some padding around the container
                // so we have to recheck the bounds here
                scrollRef.current = scrollNexSnap
                currentIndexRef.current = thisIndex
            }

            if (onIndexChange && !down) {
                onIndexChange(currentIndexRef.current, isLast(maxScroll))
            }

            if (down && (isLeftEdgeBounce || isRightEdgeBounce)) {
                scrollRef.current = rubberbandIfOutOfBounds(
                    scrollRef.current + moveX,
                    maxScroll >= 0 ? -60 : maxScroll - padding,
                    maxScroll - padding === 0 || maxScroll >= 0 ? 60 : 0,
                    rubberBandConst,
                )
            }
            api.start({
                x: scrollRef.current,
            })
        },
        {
            axis: 'x',
            target: containerRef,
            // inertia: true,
            pointer: {
                touch: true,
                capture: false,
                lock: false,
            },
            eventOptions: { passive: false },
        },
    )

    return (
        <StyledCarousel>
            <StyledContainer role="region" aria-label="carousel" draggable="false" ref={containerRef} style={spring}>
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(<StyledItem key={i}>{child}</StyledItem>, {
                        'data-index': i,
                    }),
                )}
            </StyledContainer>
        </StyledCarousel>
    )
}
