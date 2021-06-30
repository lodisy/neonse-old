import create from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
    show: boolean
    toggle: () => void
}

export const useUserStore = create(
    devtools((set) => ({
        show: false,
        toggle: () =>
            set((state: State) => ({
                show: !state.show,
            })),
    })),
)
