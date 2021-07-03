import React from 'react'
import { ScrollArea } from '../ScrollArea'

import { Carousel } from './Carousel'

export default {
    title: 'Components/Carousel',
}

const items = ['a', 'b', 'c', 'd', 'e', 'f']

export const Default = () => {
    return (
        <ScrollArea>
            <Carousel
                springConfig={{
                    mass: 1,
                    tension: 150,
                    friction: 50,
                    velocity: 0.1,
                }}
            >
                {items.map((item) => (
                    <span>item</span>
                ))}
            </Carousel>
        </ScrollArea>
    )
}
