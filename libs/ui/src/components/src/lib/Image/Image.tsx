import React from 'react'
import NextImage from 'next/image'
import type { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = {
    src: string
} & Pick<NextImageProps, 'objectFit' | 'blurDataURL' | 'priority'>

export const Image = ({ src, ...otherProps }: ImageProps) => (
    <NextImage src={src} layout="fill" placeholder="blur" {...otherProps} />
)
