import { render } from '@testing-library/react'

import ChoiceGroup from './ChoiceGroup'

describe('ChoiceGroup', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ChoiceGroup />)
        expect(baseElement).toBeTruthy()
    })
})
