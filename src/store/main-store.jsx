import { create } from 'zustand'
const useAppStore = create((set) => ({
    user: {},
    setUser: (newVal) => set(prv => prv.user = newVal),
}))
export default useAppStore