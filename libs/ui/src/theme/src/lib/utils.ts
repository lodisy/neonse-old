import type * as Stitches from '@stitches/react'

const size = ({ width, ratio = 1 }: { width: string | number; ratio?: number }) => ({
    width,
    aspectRatio: ratio,
})

const marginX = (value: Stitches.ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
})

const marginY = (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
})

const getPadding = (value: number) => ({
    padding: `${value}px calc(1.5 * ${value}px)`,
})

const disabled = (value: number) => ({
    '&:disabled': {
        opacity: value,
        cursor: 'not-allowed',
    },
})

const b = (value: string) => ({
    border: `1px solid ${value}`,
})

const bc = (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
})

const smoothen = (props: string[]) => ({
    transitionProperty: props.map((prop) => `${prop}`).join(', '),
    transitionDuration: '300ms',
    transitionTimingFunction: 'ease-in',
})

const linearGradient = ({ deg = 90, from, to }: { deg: number; from: string; to: string }) => ({
    background: `linear-gradient(${deg} ${from} ${to})`,
})

const blur = (value: string) => ({
    backdropFilter: `blur(${value})`,
})

const transY = (value: string) => ({
    transform: `translateY(${value})`,
})
const transX = (value: string) => ({
    transform: `translateX(${value})`,
})

export const utils = {
    size,
    marginX,
    marginY,
    p: getPadding,
    disabled,
    b,
    bc,
    smoothen,
    linearGradient,
    blur,
    transY,
    transX,
}
