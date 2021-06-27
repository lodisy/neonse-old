import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
    showRoots: true,
    theme: create({
        base: 'light',
        brandUrl: '***',
        // brandImage: 'https://y.qq.com/favicon.ico',
        brandTitle: 'NEONSE React Components Library',
    }),
})
