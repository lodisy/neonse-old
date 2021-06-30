import { createCss } from '@stitches/react'
import { fonts } from './fonts'
import { media } from './media'
import { palettes } from './palettes'
import { radii } from './radii'
import { shadows } from './shadows'
import { space } from './space'
import { utils } from './utils'
import { zIndices } from './zIndices'

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

export const globalStyles = global({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        userSelect: 'none',
        listStyle: 'none',
        textDecoration: 'none',
        fontFamily: '$default',
    },
    body: {
        backgroundColor: '$base',
        smooth: 'ease',
    },
    ':focus:not(:focus-visible)': {
        outline: 'none!important',
    },
    '&.dark': darkTheme,
})()

export { styled, css, keyframes, getCssString }
