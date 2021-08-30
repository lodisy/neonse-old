import { NumberFieldStateProps } from '@react-stately/numberfield'
import { useNumberFieldState } from 'react-stately'
import { StyledWeb } from './style'

export const Web = (props: NumberFieldStateProps) => {
    const state = useNumberFieldState(props)
    return <StyledWeb type="number" {...state} />
}
