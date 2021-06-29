import { render } from '@testing-library/react'

import UiSrcComponents from './ui-src-components'

describe('UiSrcComponents', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<UiSrcComponents />)
        expect(baseElement).toBeTruthy()
    })
})
