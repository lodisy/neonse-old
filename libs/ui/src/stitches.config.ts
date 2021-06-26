import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
    theme: {
        colors: {
            background: 'hsl(30, 30%, 96%)',
            paragraph: 'hsl(180, 4%, 14%)',
            buttonBackground: 'hsl(180, 90%, 26%)',
            buttonText: 'hsl(0, 0%, 14%)',
            // TODO
        },
        fonts: {
            default:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            sans: '', // 多字体
            serif: '',
            mono: '',
        },
        fontSizes: {
            xs: '0.8rem',
            sm: '1rem',
            md: '1.2rem',
            lg: '1.5rem',
            xl: '2rem',
        },
        sizes: {
            // margin padding 等
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
            8: '40px',
            9: '45px',
        },
        zIndices: {
            lowest: -100,
            negative: -1,
            100: 100,
            200: 200,
            300: 300,
            400: 400,
            500: 500,
            highest: 9999,
        },
        radii: {
            1: '4px',
            2: '8px',
            3: '16px',
            round: '50%',
            pill: '9999px',
        },
    },
    media: {
        sm: '(max-width: 480px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
        reduceMotion: '(prefers-reduced-motion)',
    },
    utils: {
        marginX: (config) => (value) => ({ marginLeft: value, marginRight: value }),
        brightness: (config) => (value) => ({
            filter: `brightness(${value})`,
        }),
    },
})

export const darkTheme = theme('dark', {
    colors: {},
})
