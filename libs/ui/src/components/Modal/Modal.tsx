import { styled } from '@/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

const StyledContent = styled(Dialog.Content, {
    backgroundColor: '$background',
})

export type ModalProps = {
    disableOverlay?: boolean
    trigger: React.ReactNode
    children?: React.ReactNode
} & Dialog.DialogOwnProps

const Modal = ({ trigger, disableOverlay = false, children, ...otherProps }: ModalProps) => {
    return (
        <Dialog.Root {...otherProps}>
            <Dialog.Trigger>{trigger}</Dialog.Trigger>
            {!disableOverlay && <Dialog.Overlay />}
            <StyledContent>{children}</StyledContent>
            {/**
             * title description close
             */}
        </Dialog.Root>
    )
}

export default Modal
