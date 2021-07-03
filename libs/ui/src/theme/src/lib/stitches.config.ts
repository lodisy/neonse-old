import { createCss } from '@stitches/react'
import { fonts } from './fonts'
import { media } from './media'
import { palettes } from './palettes'
import { radii } from './radii'
import { shadows } from './shadows'
import { space } from './space'
import { utils } from './utils'
import { zIndices } from './zIndices'
export type { StitchesVariants } from '@stitches/react'

const stitches = createCss({
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

const { styled, css, global, keyframes, getCssString, theme } = stitches

export const darkTheme = theme('dark', {
    colors: {
        ...palettes.dark,
        ...palettes.common,
    },
    shadows: { ...shadows.dark },
})

export const sommerTheme = theme('sommer', {
    colors: {
        ...palettes.sommer,
    },
})

export const nightTheme = theme('night', {
    colors: {
        ...palettes.night,
        ...palettes.common,
    },
})
export const globalStyles = global({
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
    '&.dark': darkTheme,
    '&.night': nightTheme,
})()

export { styled, css, keyframes, getCssString }
