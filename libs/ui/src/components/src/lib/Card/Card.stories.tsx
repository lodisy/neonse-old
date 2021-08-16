import { Card } from './Card'

export default {
    title: 'Components/Card',
}

export const Default = () => (
    <Card collapsible={false} content={<span>Additional content</span>}>
        <span>Some descriptions</span>
    </Card>
)
