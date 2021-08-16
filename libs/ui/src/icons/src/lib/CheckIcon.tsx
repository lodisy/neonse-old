import { styled } from '@neonse/ui/theme'
import { animated, useSpring, config } from '@react-spring/web'

const StyledPath = styled(animated.path, {
    stroke: '$successText',
})

export const CheckIcon = () => {
    const { x } = useSpring({
        from: { x: 0 },
        x: 1,
        delay: 200,
        config: config.molasses,
    })

    return (
        <svg viewBox="0 0 24 24" fill="none">
            <StyledPath d="M7 13l3 3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
