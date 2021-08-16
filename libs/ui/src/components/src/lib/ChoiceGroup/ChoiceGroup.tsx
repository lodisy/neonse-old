/**
 * TODO
 * - Styling responsive
 * - integrate with tooltip
 * - Indicator and Action / Status Button
 *
 */

import { styled, css } from '@neonse/ui/theme'
import * as RadioGroup from '@radix-ui/react-radio-group'
import React from 'react'
import { CheckIcon, FocusCircleIcon } from '@neonse/ui/icons'
import { Carousel } from '../Carousel'


const StyledRoot = styled('div', {
    display: 'flex',
    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
    },
})
const StyledIndicator = styled('span', {
    position: 'absolute',
    top: 16,
    left: 16,

    size: {
        width: 20,
        ratio: 1,
    },
    borderRadius: '$round',
    '& svg': {
        position: 'absolute',
    },
})

const StyledActionButton = styled('div', {
    position: 'absolute',
    top: 16,
    right: 16,
    opacity: 0,
    size: {
        width: 30,
        ratio: 1,
    },
    borderRadius: '$round',
    border: 'none',
})

const StyledChoice = styled('div', {
    position: 'relative',
    cursor: 'pointer',
    size: {
        width: 300,
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
    smoothen: ['color', 'background-color'],
    '&:hover': {
        backgroundColor: '$backgroundHovered',
        boxShadow: '$2',
        [`& ${StyledActionButton}`]: {
            opacity: 1,
            transition: 'opacity 300ms ease',
        },
    },
    '&[data-state="checked"]': {
        backgroundColor: '$backgroundActive',
        boxShadow: '$1',
    },
})

export type ChoiceType = {
    label: React.ReactElement
    value: string
}

export type ChoiceGroupProps = {
    choices: ChoiceType[]
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
            {orientation !== 'vertical' ? (
                <Carousel
                    slidesPerView={3}
                    padding={50}
                    aspectRatio={1.5}
                    springConfig={{
                        tension: 150,
                        friction: 50,
                        velocity: 0.1,
                    }}
                >
                    {choices.map((choice) => (
                        <RadioGroup.Item
                            key={choice.value}
                            value={choice.value}
                            as={StyledChoice}
                            css={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            {choice.label}
                            <RadioGroup.Indicator as={StyledIndicator}>
                                <CheckIcon />
                                <FocusCircleIcon />
                            </RadioGroup.Indicator>
                            <StyledActionButton onClick={() => alert('edit')}>edit</StyledActionButton>
                        </RadioGroup.Item>
                    ))}
                </Carousel>
            ) : (
                <>
                    {choices.map((choice) => (
                        <RadioGroup.Item
                            key={choice.value}
                            value={choice.value}
                            as={StyledChoice}
                            css={{
                                marginY: '$1',
                            }}
                        >
                            {choice.label}

                            <RadioGroup.Indicator as={StyledIndicator}>
                                <CheckIcon />
                                <FocusCircleIcon />
                            </RadioGroup.Indicator>
                            <StyledActionButton onClick={() => alert('edit')}>edit</StyledActionButton>
                        </RadioGroup.Item>
                    ))}
                </>
            )}
        </RadioGroup.Root>
    )
}
