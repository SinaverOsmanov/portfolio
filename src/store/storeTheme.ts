import { create } from 'zustand';

type ThemeState = {
    dark: boolean,
    toggleDark: ()=>void
}

const useStoreTheme = create<ThemeState>((set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: state.dark })),
}));

export default useStoreTheme;
