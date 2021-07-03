// TODO add value indicator and animation?
// mostly for font size changer

import React from 'react'
import * as ReactSlider from '@radix-ui/react-slider'
import { styled } from '@neonse/ui/theme'

const StyledSlider = styled('span', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    height: 16,
    width: '100%',
    minWidth: 150,
    maxWidth: 350,
})

const StyledTrack = styled('span', {
    backgroundColor: '$solidBackgroundDisabled',
    position: 'relative',
    flexGrow: 1,
    height: 2,
    borderRadius: '9999px',
})

const StyledRange = styled('span', {
    position: 'absolute',
    backgroundColor: '$solidBackground',
    borderRadius: '9999px',
    height: '100%',
})

const StyledThumb = styled('span', {
    display: 'block',
    width: 16,
    height: 16,
    backgroundColor: 'white',
    b: '$solidBackground',
    borderRadius: '$round',
    '&:focus': {
        outline: 'none',
        borderColor: 'dodgerblue',
    },
})

type SliderProps = Omit<ReactSlider.SliderOwnProps, 'as'>

export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
    ({ defaultValue, value, ...otherProps }, forwardRef) => {
        const values = value || defaultValue

        return (
            <ReactSlider.Root {...otherProps} ref={forwardRef} as={StyledSlider}>
                <ReactSlider.Track as={StyledTrack}>
                    <ReactSlider.Range as={StyledRange} />
                </ReactSlider.Track>
                {values && values.map((_, i) => <ReactSlider.Thumb key={i} as={StyledThumb} />)}
            </ReactSlider.Root>
        )
    },
)
