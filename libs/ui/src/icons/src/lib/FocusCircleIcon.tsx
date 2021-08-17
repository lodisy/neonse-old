import { styled } from '@neonse/ui-theme'

const StyledCircle = styled('circle', {
    fill: '$solidBackground',
})

export const FocusCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
        <StyledCircle cx="12" cy="12" r="12" opacity="0.2"></StyledCircle>
    </svg>
)
