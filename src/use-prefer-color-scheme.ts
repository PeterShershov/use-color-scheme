import { useEffect, useMemo, useState } from 'react';

export function usePreferColorScheme(): 'light' | 'dark' {
    const darkModeMediaQuery = useMemo(() => window.matchMedia('(prefers-color-scheme: dark)'), []);
    const [darkMode, setDarkMode] = useState<boolean>(darkModeMediaQuery.matches);

    useEffect(() => {
        const handleDarkModeChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

        darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    }, [darkModeMediaQuery.matches, setDarkMode]);

    return darkMode ? 'dark' : 'light';
}
