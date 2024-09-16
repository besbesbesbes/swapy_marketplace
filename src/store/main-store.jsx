import { create } from 'zustand'
const useAppStore = create((set) => ({
    user: {},
    setUser: (newValue) => set(prv => prv.user = newValue),
}))
export default useAppStore