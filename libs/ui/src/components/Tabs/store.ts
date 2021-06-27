import create from 'zustand'
import { devtools } from 'zustand/middleware'

type TabSize = {
    offsetLeft: number
    offsetTop: number
    clientWidth: number
    clientHeight: number
}

type TabStore = {
    tabIndex: number
    tabsRef: TabSize[]
    setTabsRef: (value: TabSize[]) => void
    setTabRef: (value: TabSize, index: number) => void
    setTabIndex: (value: number) => void
}

export const useTabStore = create<TabStore>(
    devtools((set, get) => ({
        tabIndex: 0,
        tabsRef: [],
        setTabIndex: (value: number) => set({ tabIndex: value }),
        setTabsRef: (value: TabSize[]) => set({ tabsRef: value }),
        setTabRef: (value: TabSize, index: number) => {
            let data = [...get().tabsRef]
            data[index] = value
            get().setTabsRef(data)
        },
    })),
)
