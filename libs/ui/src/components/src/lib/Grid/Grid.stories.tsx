import { Story } from '@storybook/react'
import { Grid } from './Grid'

export default {
    component: Grid,
    title: 'Components/Grid',
}

export const Default = () => (
    <Grid columns="1">
        <div>some things inside</div>
        <div>some things inside</div>
        <div>some things inside</div>
    </Grid>
)
