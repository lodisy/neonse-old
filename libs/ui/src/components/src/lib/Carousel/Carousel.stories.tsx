import React from 'react'
import { ScrollArea } from '../ScrollArea'
import { Meta } from '@storybook/react'

import { Carousel } from './Carousel'

export default {
    title: 'Components/Carousel',
} as Meta

const items = ['a', 'b', 'c', 'd', 'e', 'f']

export const Default = () => {
    return (
        <Carousel
            width={{
                '@initial': '80vw',
                '@sm': '100vw',
            }}
            slidesPerView={3}
            springConfig={{
                mass: 1,
                tension: 150,
                friction: 50,
                velocity: 0.1,
            }}
        >
            {items.map((item) => (
                <span>{item}</span>
            ))}
        </Carousel>
    )
}
