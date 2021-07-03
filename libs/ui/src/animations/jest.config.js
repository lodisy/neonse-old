module.exports = {
    displayName: 'ui-src-animations',
    preset: '../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../../coverage/libs/ui/src/animations',
}
