import React from 'react'
import { View } from 'react-native'
import { ViewProps } from 'remax/wechat'
import { StyledBox, StyledMiniView, StyledView } from './style'

export const Native = React.forwardRef<React.RefObject<View>, any>(({ children, ...otherProps }, forwardRef) => (
    <StyledView ref={forwardRef} {...otherProps}>
        {children}
    </StyledView>
))

export const Web = React.forwardRef<React.RefObject<HTMLDivElement>, any>(({ children, ...otherProps }, forwardRef) => (
    <StyledBox ref={forwardRef} {...otherProps}>
        {children}
    </StyledBox>
))

export const Mini = React.forwardRef<React.RefObject<React.ComponentClass<ViewProps, any>>, any>(
    ({ children, ...otherProps }, forwardRef) => (
        <StyledMiniView ref={forwardRef} {...otherProps}>
            {children}
        </StyledMiniView>
    ),
)
