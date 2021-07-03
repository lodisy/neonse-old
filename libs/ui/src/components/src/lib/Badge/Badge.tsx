import React from 'react'
import { styled } from '@neonse/ui/theme'

import type * as Polymorphic from '@radix-ui/react-polymorphic'

const StyledBadage = styled('span', {
    // Custom
    backgroundColor: '$solidBackground',
    borderRadius: '$pill',
    color: '$solidText',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        size: {
            '1': {
                height: '$4',
                px: '$1',
                fontSize: '$1',
            },
            '2': {
                height: '$5',
                px: '$2',
                fontSize: '$2',
            },
        },
        variant: {
            gray: {
                backgroundColor: '$slate3',
                color: '$slate11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
            },

            bronze: {
                backgroundColor: '$bronze3',
                color: '$bronze11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$bronze8, 0 0 0 1px $colors$bronze8',
                },
            },
        },
        interactive: {
            true: {},
        },
    },

    compoundVariants: [
        {
            interactive: true,
            variant: 'bronze',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$red4',
                    },
                },
                '&:active': {
                    backgroundColor: '$red5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
                    {
                        backgroundColor: '$red5',
                    },
            },
        },
    ],
    defaultVariants: {
        size: '1',
        variant: 'gray',
    },
})
