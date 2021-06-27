import { createCss } from '@stitches/react'

const stitches = createCss({
    theme: {
        colors: {
            /** colors of element */
            background: 'hsl(210,1%,98%)',
            secondaryBackground: 'hsl(210, 3%, 94%)',
            paragraph: 'hsl(210, 19%, 25%)',
            secondaryParagraph: 'hsl(210, 16%, 34%)',
            buttonBackground: '	hsl(240, 11%, 14%)',
            buttonText: 'hsl(0, 14%, 97%)',
            secondaryButtonBackground: 'hsl(223, 9%, 31%)',
            secondaryButtonText: 'hsl(0, 14%, 97%)',
            disabledButtonBackground: 'hsl(221, 11%, 71%)',
            disabledButtonText: 'hsl(0, 14%, 97%)',
            heading: 'hsl(210,20%,16%)',
            label: 'hsl(208,14%,49%)',
            placeholder: 'hsl(208,14%,49%)',
            inputBackground: 'hsl(210,6%, 85%)',
            secondaryInputBackground: 'hsl(210,3%, 90%)',
            disabledInputBackground: 'hsl(210,8%,74%)',
            errorText: 'hsl(0, 14%, 97%)',
            errorBackground: 'hsl(12, 98%, 44%)',
            warningText: 'hsl(0, 14%, 97%)',
            warningBackground: 'hsl(23, 97%, 46%)',
            successText: 'hsl(0, 14%, 97%)',
            successBackground: 'hsl(135, 63%, 39%)',
            linkText: 'hsl(240, 7%, 45%)',
            linkHover: 'hsl(0, 7%, 45%)',
            linkVisited: 'hsl(0, 7%, 45%)',
            border: 'hsl(210,3%,90%)',
            borderFocused: 'hsl(210,6%,85%)',
            borderDisabled: 'hsl(210, 3%, 94%)',
            switchOn: 'hsl(135, 63%, 39%)',
            switchOff: 'hsl(210,8%,74%)',
            boxShadow: 'hsla(206,22%,7%,.35)',
            /** colors of logo */

            stripe: 'hsl(243, 100%, 68%)',
            wechat: 'hsl(0, 0%, 30%)',
            alipay: '',

            // TODO
        },
        shadows: {},
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
        space: {
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
        size: (config) => (value) => ({
            width: value,
            height: value,
        }),

        // withOpacity: (config) => (color: string, opacity: number) => {  //TODO convert hsl to hsla

        //     let hsl = null

        //     const isHSL = color.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g)

        //     if(isHSL && isHSL[0].match(/(\d+(\.\d+)?)/g)){

        //         const hsla = isHSL[0].match(/(\d+(\.\d+)?)/g) as number[]

        //         return `hsla(${hsla[0]}, ${hsla[1]}, ${hsla[2]})`
        //     }

        // },

        marginX: (config) => (value: number) => ({ marginLeft: value, marginRight: value }),
        marginY: (config) => (value: number) => ({ marginTop: value, marginBottom: value }),
        paddingX: (config) => (value: number) => ({ paddingLeft: value, paddingRight: value }),
        paddingY: (config) => (value: number) => ({ paddingTop: value, paddingBottom: value }),
        brightness: (config) => (value) => ({
            filter: `brightness(${value})`,
        }),
    },
})

const { styled, css, global, keyframes, getCssString, theme } = stitches

export const darkTheme = theme('dark', {
    colors: {
        /** colors of element */
        background: 'hsl(0,0%,10%)',
        secondaryBackground: 'hsl(0, 0%, 20%)',
        paragraph: 'hsl(0, 0%, 48%)',
        secondaryParagraph: 'hsl(0, 0%, 41%)',
        buttonBackground: 'hsl(0, 0%, 93%)',
        buttonText: 'hsl(0, 0%, 48%)',
        secondaryButtonBackground: 'hsl(0, 0%, 75%)',
        secondaryButtonText: 'hsl(0, 0%, 48%)',
        disabledButtonBackground: 'hsl(0, 0%, 40%)',
        disabledButtonText: 'hsl(0, 0%, 48%)',
        heading: 'hsl(0,0%,95%)',
        label: 'hsl(0, 0%, 62%)',
        placeholder: 'hsl(0, 0%, 62%)',
        inputBackground: 'hsl(0, 0%, 20%)',
        secondaryInputBackground: 'hsl(0, 0%, 17%)',
        disabledInputBackground: 'hsl(0, 0%, 14%)',
        errorText: 'hsl(0, 0%, 48%)',
        errorBackground: 'hsl(12, 98%, 44%)',
        warningText: 'hsl(0, 0%, 48%)',
        warningBackground: 'hsl(23, 97%, 46%)',
        successText: 'hsl(0, 0%, 48%)',
        successBackground: 'hsl(135, 63%, 39%)',
        linkText: 'hsl(240, 7%, 45%)',
        linkHover: 'hsl(0, 7%, 45%)',
        linkVisited: 'hsl(0, 7%, 45%)',
        border: 'hsl(0, 0%, 17%)',
        borderFocused: 'hsl(0, 0%, 20%)',
        borderDisabled: 'hsl(0, 0%, 15%)',
        switchOn: 'hsl(135, 63%, 39%)',
        switchOff: 'hsl(0, 0%, 14%)',
        boxShadow: 'hsla(206,22%,7%,.2)',
        /** colors of logo */

        stripe: 'hsl(0, 0%, 100%)',
        wechat: 'hsl(0, 0%, 100%)',
    },
})

export const sommerTheme = theme('sommer', {
    colors: {
        background: 'hsl(9, 48%, 95%)',
        paragraph: 'hsl(10, 49%, 10%)',
        buttonBackground: 'hsl(9, 97%, 86%)',
        buttonText: 'hsl(10, 49%, 10%)',
        secondaryButtonBackground: 'hsl(9, 88%, 90%)',
        secondaryButtonText: '',
        disabledButtonBackground: 'hsl(32, 31%, 89%)',
        disabledButtonText: 'hsl(32, 31%, 79%)',
        heading: 'hsl(10, 49%, 5%)',
        label: 'hsl(28, 98%, 80%)',
        placeholder: 'hsl(28, 98%, 80%)',
        inputBackground: 'hsl(60, 8%, 90%)',
    },
})

export const sommerDarkTheme = theme('sommer-dark', {
    colors: {
        background: 'hsl(0, 0%, 100%)',

        // ... dark theme
    },
})

export { styled, css, global, keyframes, getCssString, theme }
