// for react native
import DeviceInfo from 'react-native-device-info'
import { createStitches } from 'stitches-native'
import { palettes } from './palettes'

const isTablet = DeviceInfo.isTablet()

const { styled, css, createTheme, ThemeProvider } = createStitches({
    theme: {
        colors: {
            ...palettes.default,
            ...palettes.common,
        },
    },
    media: {
        phone: !isTablet,
        tablet: isTablet,
    },
    utils: {},
    themeMap: {},
})

const darkThemeNative = createTheme({
    colors: {
        ...palettes.default,
        ...palettes.dark,
    },
})

const styledNative = styled

const cssNative = css

export { styledNative, cssNative, darkThemeNative, ThemeProvider }
