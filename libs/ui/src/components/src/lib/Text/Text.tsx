import { styled, styledNative } from '@neonse/ui-theme'
import { Text as NativeText } from 'react-native'
import { Text as MiniText } from 'remax/wechat'
import { styles } from './style'

export const Web = styled('span', styles)

export const Native = styledNative(NativeText, styles)

export const Mini = styled(MiniText, styles)
