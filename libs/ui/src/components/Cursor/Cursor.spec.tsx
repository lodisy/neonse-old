import { render } from '@testing-library/react'
import { Cursor } from './Cursor'

describe('Cursor', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Cursor />)
        expect(baseElement).toBeTruthy()
    })
})
