import React from 'react'
import { useSpring, SpringConfig } from 'react-spring'

export type BoopProps = {
    x?: number
    y?: number
    rotate?: number
    scale?: number
    springConfig?: SpringConfig
    timing?: number
}

export const useBoop = ({
    x = 0,
    y = 0,
    rotate = 0,
    scale = 1,
    springConfig = {
        tension: 300,
        friction: 10,
    },
    timing = 150,
}: BoopProps) => {
    const [isBooped, setIsBooped] = React.useState(false)

    const [styles, _] = useSpring(() => ({
        x: isBooped ? x : 0,
        y: isBooped ? y : 0,
        rotate: isBooped ? rotate : 0,
        scale: isBooped ? scale : 1,
        config: { ...springConfig },
    }))

    React.useEffect(() => {
        if (!isBooped) {
            return
        }
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false)
        }, timing)
        return () => {
            window.clearTimeout(timeoutId)
        }
    }, [isBooped, timing])

    const trigger = React.useCallback(() => {
        setIsBooped(true)
    }, [])

    return { styles, trigger }
}
