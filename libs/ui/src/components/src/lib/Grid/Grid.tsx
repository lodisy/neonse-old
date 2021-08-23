import { styled, styledNative } from '@neonse/ui-theme'
import { Box } from '../Box'
import { styles } from './style'

export const Web = styled(Box.Web, styles)

export const Native = styledNative(Box.Native, styles)

export const Mini = styled(Box.Mini, styles)
