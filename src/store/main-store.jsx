import { create } from 'zustand'
const useAppStore = create((set) => ({
    user: {},
    setUser: (newVal) => set(prv => prv.user = newVal),
    token: "",
    setToken: (newVal) => set({ token: newVal })
}))
export default useAppStore