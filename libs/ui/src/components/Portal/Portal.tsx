import ReachPortal from '@reach/portal'
import type { PortalProps as ReachPortalProps } from '@reach/portal'

export type PortalProps = Omit<ReachPortalProps, 'type'>

const Portal = ({ children }: PortalProps) => {
    return <ReachPortal type="neonse-portal">{children}</ReachPortal>
}

export default Portal
