import { styled, styledNative } from '@neonse/ui-theme'
import { View } from 'react-native'
import { View as MiniView } from 'remax/wechat'

export const StyledView = styledNative(View, {})

export const StyledBox = styled('div', {})

export const StyledMiniView = styled(MiniView, {})
