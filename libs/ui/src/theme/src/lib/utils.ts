import { IConfig } from '@stitches/react'

const getSizes = (config: IConfig) => (value: number) => ({
    width: value,
    height: value,
})

export const utils = {
    size: getSizes,
}
