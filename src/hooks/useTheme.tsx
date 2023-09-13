import { createContext, useContext } from 'react';

const ThemeDark = createContext<{ isDark: boolean; change: () => void } | null>(null);

export function useTheme() {
    return useContext(ThemeDark);
}
