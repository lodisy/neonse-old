import { styled } from '@neonse/ui/theme'
import * as ReactRadioGroup from '@radix-ui/react-radio-group'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import React from 'react'

const StyledRoot = styled(ReactRadioGroup.Root, {
    display: 'flex',
    flexDirection: 'column',
    '&[data-orientation="horizontal"]': {
        flexDirection: 'row',
    },
})

const StyledContainer = styled('div', {
    display: 'flex',
    marginY: '$1',
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        marginX: '$1',
    },
})

const StyledRadio = styled(ReactRadioGroup.Item, {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    borderRadius: '50%',
    boxShadow: 'inset 0 0 0 1px gainsboro',
    width: 15,
    height: 15,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',

    '& ~ &': { marginLeft: 5 },

    marginX: '$1',
    '&[data-orientation="horizontal"]': {
        marginY: '$1',
    },

    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
    },
})

const StyledIndicator = styled(ReactRadioGroup.Indicator, {
    width: 7,
    height: 7,
    borderRadius: '$round',
    backgroundColor: 'dodgerblue',
})

const StyledValue = styled('span', {
    color: '$paragraphSecondary',
    '&:[data-state="checked"]': {
        color: '$paragraph',
        fontWeight: '$bold',
    },
})

export type RadioGroupProps = {
    radios: string[]
} & ReactRadioGroup.RadioGroupOwnProps

export const RadioGroup = ({ radios = [], orientation, onValueChange, ...otherProps }: RadioGroupProps) => {
    const [value, setValue] = React.useState('')

    const handleValueChange = (value: string) => {
        setValue(value)
        onValueChange && onValueChange(value)
    }

    return (
        <StyledRoot value={value} orientation={orientation} {...otherProps} onValueChange={handleValueChange}>
            {radios.map((radio) => (
                <StyledContainer key={radio} data-orientation={orientation}>
                    <StyledRadio value={radio}>
                        <StyledIndicator />
                        <VisuallyHidden.Root>{radio}</VisuallyHidden.Root>
                    </StyledRadio>
                    <StyledValue data-state={value === radio ? 'checked' : 'unchecked'}>{radio}</StyledValue>
                </StyledContainer>
            ))}
        </StyledRoot>
    )
}
