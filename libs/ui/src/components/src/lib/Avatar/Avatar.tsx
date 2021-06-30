import React from 'react'
import * as ReactAvatar from '@radix-ui/react-avatar'
import { styled } from '@neonse/ui/theme'
import { Image } from '../Image'
import type { ImageProps } from '../Image'

const StyledAvatar = styled(ReactAvatar.Root, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    variants: {
        size: {
            small: {
                size: 32,
            },
            medium: {
                size: 48,
            },
            large: {
                size: 64,
            },
        },
        shape: {
            round: {
                borderRadius: '$round',
            },
            squire: {
                borderRadius: '$1',
            },
        },
    },
})

const StyledFallback = styled(ReactAvatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
})

type AvatarProps = {
    size?: 'small' | 'medium' | 'large'
    shape?: 'round' | 'squire'
} & ImageProps

export const Avatar = ({ src, size = 'medium', shape = 'round', ...otherProps }: AvatarProps) => {
    return (
        <StyledAvatar size={size} shape={shape}>
            <Image src={src} {...otherProps} />
            <StyledFallback></StyledFallback>
        </StyledAvatar>
    )
}
