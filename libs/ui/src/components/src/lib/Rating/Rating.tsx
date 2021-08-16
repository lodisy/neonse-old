import { animated } from '@react-spring/web'
import { styled } from '@neonse/ui/theme'
import { Flex } from '../Flex'
import { useBoop } from '@neonse/ui/animations'

type StarProps = {
    active?: boolean
    onClick?: () => void
}

const StarButton = ({ active, onClick }: StarProps) => {
    const { trigger, styles } = useBoop({
        y: 5,
    })
    return (
        <animated.button type="button" onClick={onClick} onMouseEnter={trigger} style={styles}>
            {active ? <span>filled SVG icon</span> : <span>outline icon</span>}
        </animated.button>
    )
}

const StyledFlex = styled(Flex, {
    '& button': {
        mr: '$2',
    },
})

export type RatingProps = {
    value: number
    onChange: (value: number) => void
}

export const Rating = ({ value, onChange }: RatingProps) => {
    return (
        <StyledFlex aria-label="rating" align="center">
            <StarButton active={value >= 1} onClick={() => onChange(1)} />
            <StarButton active={value >= 2} onClick={() => onChange(2)} />
            <StarButton active={value >= 3} onClick={() => onChange(3)} />
            <StarButton active={value >= 4} onClick={() => onChange(4)} />
            <StarButton active={value >= 5} onClick={() => onChange(5)} />
        </StyledFlex>
    )
}
