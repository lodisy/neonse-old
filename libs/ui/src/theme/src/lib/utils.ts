import { keyframes } from './stitches.config'
const size =
    (config: any) =>
    ({ width, ratio = 1 }: { width: string | number; ratio?: number }) => ({
        width,
        aspectRatio: ratio,
    })

const marginX = (config: any) => (value: string | number) => ({
    marginLeft: value,
    marginRight: value,
})

const marginY = (config: any) => (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
})

const getPadding = (config: any) => (value: number) => ({
    padding: `${value}px calc(1.5 * ${value}px)`,
})

const disabled = (config: any) => (value: number) => ({
    '&:disabled': {
        opacity: value,
        cursor: 'not-allowed',
    },
})

const b = (config: any) => (value: string) => ({
    border: `1px solid ${value}`,
})

const smoothen = (config: any) => (props: string[]) => ({
    transitionProperty: props.map((prop) => `${prop}`).join(', '),
    transitionDuration: '300ms',
    transitionTimingFunction: 'ease-in',
})

const linearGradient =
    (config: any) =>
    ({ deg = 90, from, to }: { deg: number; from: string; to: string }) => ({
        background: `linear-gradient(${deg} ${from} ${to})`,
    })

const blur = (config: any) => (value: string) => ({
    backdropFilter: `blur(${value})`,
})

const transY = (config: any) => (value: string) => ({
    transform: `translateY(${value})`,
})
const transX = (config: any) => (value: string) => ({
    transform: `translateX(${value})`,
})

export const utils = {
    size,
    marginX,
    marginY,
    p: getPadding,
    disabled,
    b,
    smoothen,
    linearGradient,
    blur,
    transY,
    transX,
}
