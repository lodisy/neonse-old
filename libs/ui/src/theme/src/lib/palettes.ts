import { colors } from './colors'

export const palettes = {
    common: {
        errorBackground: colors.imperialRed,
        errorText: colors.lightGray,
        warningBakcground: colors.sunglow,
        warningText: colors.lightGray,
        successBackground: colors.limePeel,
        successText: colors.lightGray,
    },

    default: {
        background: colors.cultured,
        backgroundSecondary: colors.lightGray,
        heading: colors.richBlack,
        headingSecondary: colors.eerieBlack,
        label: colors.charlestonGreen,
        paragraph: colors.jet,
        paragraphSecondary: colors.dimGray,

        buttonBackground: colors.richBlack,
        buttonBackgroundSecondary: colors.gunmetal,
        buttonBackgroundHovered: colors.cultured,
        buttonBackgroundSecondaryHovered: colors.warmGray,
        buttonBackgroundDisabled: colors.slateGray,
        buttonText: colors.cultured,
        buttonTextSecondary: colors.warmGray,
        buttonTextHovered: colors.richBlack,
        buttonTextSecondaryHovered: colors.gunmetal,
        buttonTextDisabled: colors.cadetBlueCrayola,

        inputBackground: colors.warmGray,
        inputBackgroundFocused: colors.lightGray,
        inputBackgroundDisabled: colors.slateGray,

        border: colors.warmGray,
        borderFocused: colors.gainsboro,
        borderDisabled: colors.slateGray,

        // box shadows
    },
    dark: {
        background: colors.richBlack,
        backgroundSecondary: colors.eerieBlack,
        heading: colors.cultured,
        headingSecondary: colors.lightGray,
        label: colors.cadetBlueCrayola,
        paragraph: colors.slateGray,
        paragraphSecondary: colors.davysGray,

        buttonBackground: colors.cultured,
        buttonBackgroundSecondary: colors.lightGray,
        buttonBackgroundHovered: colors.richBlack,
        buttonBackgroundSecondaryHovered: colors.eerieBlack,
        buttonBackgroundDisabled: colors.gunmetal,
        buttonText: colors.eerieBlack,
        buttonTextSecondary: colors.lightGray,
        buttonTextHovered: colors.richBlack,
        buttonTextSecondaryHovered: colors.eerieBlack,
        buttonTextDisabled: colors.cadetBlueCrayola,

        inputBackground: colors.eerieBlack,
        inputBackgroundFocused: colors.jet,
        inputBackgroundDisabled: colors.slateGray,
    },
    night: {},
    sommer: {},
    eiscream: {},
    frankreich: {
        background: colors.honeydew,
    },
}
