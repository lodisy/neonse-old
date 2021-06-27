import type { PortalProps as ReachPortalProps } from '@reach/portal'
import ReachPortal from '@reach/portal'

export type PortalProps = Omit<ReachPortalProps, 'type'>

export const Portal = ({ children }: PortalProps) => {
    return <ReachPortal type="neonse-portal">{children}</ReachPortal>
}
