const size =
    (config: any) =>
    ({ value, ratio = 1 }: { value: string | number; ratio?: number }) => ({
        width: value,
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

export const utils = {
    size,
    marginX,
    marginY,
    p: getPadding,
    disabled,
    b,
    smoothen,
}
