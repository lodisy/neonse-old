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
        shadows: { ...shadows },
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

// global reset style

export const globalStyles = global({
    '@import': './global.css',

    body: {
        fontFamily: '$default',
    },
})()

export const darkTheme = theme('dark', {
    colors: {
        ...palettes.dark,
    },
})

export const sommerTheme = theme('sommer', {
    colors: {
        ...palettes.sommer,
    },
})

export { styled, css, keyframes, getCssString }
