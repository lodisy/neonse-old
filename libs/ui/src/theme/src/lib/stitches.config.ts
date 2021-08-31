import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { fonts } from './fonts'
import { media } from './media'
import { palettes } from './palettes'
import { radii } from './radii'
import { shadows } from './shadows'
import { space } from './space'
import { utils } from './utils'
import { zIndices } from './zIndices'

const stitches = createStitches({
    theme: {
        colors: {
            ...palettes.default,
            ...palettes.common,
        },
        shadows: { ...shadows.default },
        fonts: { ...fonts.fontFamilies },
        fontSizes: {
            ...fonts.fontSizes,
        },
        fontWeights: {
            ...fonts.fontWeights,
        },
        space: {
            ...space,
        },
        zIndices: {
            ...zIndices,
        },
        radii: {
            ...radii,
        },
    },
    media: {
        ...media,
    },

    utils: {
        ...utils,
    },
})

const { styled, css, globalCss, keyframes, createTheme, config } = stitches

export const darkTheme = createTheme('dark', {
    colors: {
        ...palettes.dark,
        ...palettes.common,
    },
    shadows: { ...shadows.dark },
})

export const sommerTheme = createTheme('sommer', {
    colors: {
        ...palettes.sommer,
    },
})

export const nightTheme = createTheme('night', {
    colors: {
        ...palettes.night,
        ...palettes.common,
    },
})
export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        userSelect: 'none',
        listStyle: 'none',
        textDecoration: 'none',
        fontFamily: '$default',
        alignItems: 'center',
        appearance: 'none',
    },
    body: {
        background: '$base',
        smooth: 'ease',
    },
    ':focus:not(:focus-visible)': {
        outline: 'none!important',
    },
    // '&.dark': darkTheme,
    // '&.night': nightTheme,
})()

type CSS = Stitches.CSS<typeof config>

export { styled, css, keyframes, CSS }
