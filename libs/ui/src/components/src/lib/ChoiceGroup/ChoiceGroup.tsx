import { styled } from '@neonse/ui/theme'
import * as RadioGroup from '@radix-ui/react-radio-group'
import React from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Tooltip } from '../Tooltip'

const StyledRoot = styled('div', {
    display: 'flex',
    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
    },
})

const StyledChoice = styled('div', {
    position: 'relative',
    cursor: 'pointer',
    size: {
        value: 300,
        ratio: 1.5,
    },
    padding: '$1',
    backgroundColor: '$background',
    borderRadius: '$2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    flexShrink: 0,
    margin: '$2',
    smoothen: ['color', 'background-color'],
    '&:hover': {
        backgroundColor: '$backgroundHovered',
        boxShadow: '$2',
    },
    '&[data-state="checked"]': {
        b: '$border',
        backgroundColor: '$backgroundActive',
        boxShadow: '$1',
    },
})

const StyledIndicator = styled(RadioGroup.Indicator, {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 7,
    height: 7,
    borderRadius: '$round',
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

    return (
        <RadioGroup.Root
            aria-label={label}
            value={value}
            orientation={orientation}
            onValueChange={handleValueChange}
            as={StyledRoot}
            {...otherProps}
        >
            {choices.map((choice) => (
                <RadioGroup.Item key={choice.value} value={choice.value} as={StyledChoice}>
                    {React.cloneElement(choice.label, {
                        'data-checked': value === choice.value ? 'true' : 'false',
                    })}
                    <RadioGroup.Indicator as={StyledIndicator} />
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    )
}
