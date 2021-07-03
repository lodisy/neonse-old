import React from 'react'

import { Rating } from './Rating'

export default {
    title: 'Components/Rating',
}

export const Default = () => {
    const [value, setValue] = React.useState(0)

    const onChange = (value: number) => setValue(value)

    return <Rating value={value} onChange={onChange} />
}
