import { gray, grayDark, red, grass, amber, blackA, whiteA, purpleDark, cyanDark } from '@radix-ui/colors'

/**
 * Step use case:
 * - 1 for App background
 * - 2 for Subtle background
 * - 3 for UI element background
 * - 4 for Hovered UI element background
 * - 5 for Ative or selected UI element background
 * - 6 for Subtle borders and separators
 * - 7 for UI element border and focused rings
 * - 8 for Hovered UI element border
 * - 9 for Solid background (white or black text)
 * - 10 for Solid background hovered (white or black text)
 * - 11 for Text
 * - 12 for High contrast Text
 */

export const palettes = {
    common: {
        errorBackground: red.red4,
        errorText: red.red11,
        successBackground: grass.grass4,
        successText: grass.grass11,
        warningBackground: amber.amber4,
        warningText: amber.amber11,
    },

    default: {
        base: gray.gray2,

        background: gray.gray3,
        backgroundHovered: gray.gray4,
        backgroundActive: gray.gray5,

        border: gray.gray6,
        borderFocused: gray.gray7,
        borderHovered: gray.gray8,

        solidBackground: gray.gray12,
        solidBackgroundHovered: gray.gray11,
        solidBackgroundDisabled: gray.gray9,
        solidBackgroundText: gray.gray1,

        text: gray.gray11,
        textContrast: gray.gray12,

        overlay: blackA.blackA6,

        // shadows

        shadow1: blackA.blackA1,
        shadow2: blackA.blackA2,
        shadow3: blackA.blackA3,
        shadow4: blackA.blackA4,
        shadow5: blackA.blackA5,
        shadow6: blackA.blackA6,
        shadow7: blackA.blackA7,
        shadow8: blackA.blackA8,
        shadow9: blackA.blackA9,
        shadow10: blackA.blackA10,
        shadow11: blackA.blackA11,
        shadow12: blackA.blackA12,

        // icons
        alipayIcon: 'hsl(199, 100%, 45%)',
        alipayIconText: gray.gray1,
        alipayText: gray.gray11,

        stripe: 'hsl(243, 100%, 68%)',

        wechatIcon: 'hsl(120, 75%, 39%)',
        wechatText: gray.gray11,
    },
    dark: {
        base: grayDark.gray2,

        background: grayDark.gray3,
        backgroundHovered: grayDark.gray4,
        backgroundActive: grayDark.gray5,

        border: grayDark.gray6,
        borderFocused: grayDark.gray7,
        borderHovered: grayDark.gray8,

        solidBackground: grayDark.gray12,
        solidBackgroundHovered: grayDark.gray11,
        solidBackgroundDisabled: grayDark.gray9,
        solidBackgroundText: grayDark.gray1,

        text: grayDark.gray11,
        textContrast: grayDark.gray12,

        overlay: whiteA.whiteA6,

        // shadows

        shadow1: whiteA.whiteA1,
        shadow2: whiteA.whiteA2,
        shadow3: whiteA.whiteA3,
        shadow4: whiteA.whiteA4,
        shadow5: whiteA.whiteA5,
        shadow6: whiteA.whiteA6,
        shadow7: whiteA.whiteA7,
        shadow8: whiteA.whiteA8,
        shadow9: whiteA.whiteA9,
        shadow10: whiteA.whiteA10,
        shadow11: whiteA.whiteA11,
        shadow12: whiteA.whiteA12,

        // icons
        alipayIcon: 'hsl(199, 100%, 45%)',
        alipayIconText: grayDark.gray1,
        alipayText: grayDark.gray11,

        stripe: 'hsl(0, 0%, 100%)',

        wechatIcon: 'hsl(120, 75%, 39%)',
        wechatText: grayDark.gray11,
    },
    night: {
        base: purpleDark.purple1,

        background: purpleDark.purple2,
        backgroundHovered: cyanDark.cyan1,
    },
    sommer: {},
    eiscream: {},
}
