import { render } from '@testing-library/react'
import { Portal } from './Portal'

describe('Portal', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Portal>test portal</Portal>)
        expect(baseElement).toBeTruthy()
    })
})
