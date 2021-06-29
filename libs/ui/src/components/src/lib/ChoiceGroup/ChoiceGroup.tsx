import { styled } from '@neonse/ui/theme'
import * as RadioGroup from '@radix-ui/react-radio-group'
import React from 'react'

const StyledRoot = styled(RadioGroup.Root, {})

const StyledChoice = styled(RadioGroup.Item, {
    position: 'relative',
    cursor: 'pointer',
    minWidth: 250,
    width: 'auto',
    padding: '$1',
    backgroundColor: '$secondaryBackground',
    borderRadius: '$2',
    display: 'flex',
    verticalAlign: 'middle',
    justifyContent: 'center',
    // '&:focus': {
    //     outline: 'none',
    //     boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
    // },
})

const StyledIndicator = styled(RadioGroup.Indicator, {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 7,
    height: 7,
    borderRadius: '$round',
    backgroundColor: 'dodgerblue',
})

export type Choice = {
    label: React.ReactElement
    value: string
}

export type ChoiceGroupProps = {
    choices: Choice[]
    label?: string
    onValueChange?: (value: string) => void
} & RadioGroup.RadioGroupOwnProps

export const ChoiceGroup = ({
    choices = [],
    label,
    onValueChange,
    orientation = 'horizontal',
    ...otherProps
}: ChoiceGroupProps) => {
    const [value, setValue] = React.useState('')

    const handleValueChange = (value: string) => {
        setValue(value)
        onValueChange && onValueChange(value)
    }

    console.log(value)

    return (
        <StyledRoot
            aria-label={label}
            value={value}
            orientation={orientation}
            onValueChange={handleValueChange}
            {...otherProps}
        >
            {choices.map((choice) => (
                <StyledChoice key={choice.value} value={choice.value}>
                    {React.cloneElement(choice.label, {
                        'data-state': value === choice.value ? 'checked' : 'unchecked',
                    })}
                    <StyledIndicator />
                </StyledChoice>
            ))}
        </StyledRoot>
    )
}
