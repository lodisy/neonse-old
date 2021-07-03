import { Story, Meta } from '@storybook/react'
import * as Accordion from './Accordion'
import React from 'react'

export default { title: 'Components/Accordion' } as Meta

export const Single = () => {
    return (
        <Accordion.Root type="single" defaultValue="1">
            <Accordion.Item value="1">
                <Accordion.Trigger>Item 1</Accordion.Trigger>

                <Accordion.Content>Here goes the content for the accordion item 1.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="2">
                <Accordion.Trigger>Item 2</Accordion.Trigger>

                <Accordion.Content>Here goes the content for the accordion item 2.</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export const Multiple = () => {
    return (
        <Accordion.Root type="multiple" defaultValue={['1']}>
            <Accordion.Item value="1">
                <Accordion.Trigger>Item 1</Accordion.Trigger>

                <Accordion.Content>Here goes the content for the accordion item 1.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="2">
                <Accordion.Trigger>Item 2</Accordion.Trigger>

                <Accordion.Content>Here goes the content for the accordion item 2.</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}
