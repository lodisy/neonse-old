import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
    iphonePlus: {
        name: 'iPhone Plus',
        styles: {
            width: '414px',
            height: '736px',
        },
    },
    iphoneX: {
        name: 'iPhone X',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    iphone12: {
        name: 'iPhone 12',
        styles: {
            width: '390px',
            height: '844px',
        },
    },
    iphone12ProMax: {
        name: 'iPhone 12 Pro Max ',
        styles: {
            width: '428px',
            height: '926px',
        },
    },
}

export const parameters = {
    layout: 'centered',
    // viewMode: 'docs',
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
}

// .storybook/preview.js

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'fr', right: '🇫🇷', title: 'Français' },
                { value: 'es', right: '🇪🇸', title: 'Español' },
                { value: 'zh', right: '🇨🇳', title: '中文' },
                { value: 'kr', right: '🇰🇷', title: '한국어' },
            ],
        },
    },
}
