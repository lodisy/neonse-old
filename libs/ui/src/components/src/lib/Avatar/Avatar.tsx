import { styled } from '@neonse/ui-theme'
import * as ReactAvatar from '@radix-ui/react-avatar'
import { Slot } from '@radix-ui/react-slot'
import NextImage, { ImageProps } from 'next/image'
import React from 'react'

const StyledAvatar = styled(ReactAvatar.Root, {
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    position: 'relative',
    border: 'none',
    fontFamily: 'inherit',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    fontWeight: '500',
    color: '$textContrast',
    backgroundColor: '$solidBackground',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
    },
    variants: {
        size: {
            small: {
                size: {
                    width: 32,
                },
            },
            medium: {
                size: {
                    width: 48,
                },
            },
            large: {
                size: {
                    width: 64,
                },
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

        inactive: {
            true: {
                opacity: '.3',
            },
        },
        interactive: {
            true: {
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    backgroundColor: 'rgba(0,0,0,.08)',
                    opacity: '0',
                    pointerEvents: 'none',
                    transition: 'opacity 25ms linear',
                },
                '@hover': {
                    '&:hover': {
                        '&::after': {
                            opacity: '1',
                        },
                    },
                },
                '&[data-state="open"]': {
                    '&::after': {
                        backgroundColor: 'rgba(0,0,0,.12)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: 'medium',
        shape: 'round',
    },
})

const StyledFallback = styled(ReactAvatar.Fallback, {
    textTransform: 'uppercase',
    variants: {
        size: {
            '1': {
                fontSize: '10px',
                lineHeight: '15px',
            },
        },
    },
    defaultVariants: {
        size: '1',
    },
})

type AvatarProps = {
    size?: 'small' | 'medium' | 'large'
    shape?: 'round' | 'squire'
} & ImageProps

export const Avatar = ({ src, size = 'medium', shape = 'round', blurDataURL, ...otherProps }: AvatarProps) => {
    return (
        <StyledAvatar size={size} shape={shape}>
            <ReactAvatar.Image as={Slot}>
                <NextImage layout="fill" placeholder="blur" src={src} blurDataURL={blurDataURL} {...otherProps} />
            </ReactAvatar.Image>
            <StyledFallback>{}</StyledFallback>
        </StyledAvatar>
    )
}
