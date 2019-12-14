import { useEffect, useState } from 'react';

export function usePreferColorScheme(): 'light' | 'dark' {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState<boolean>(darkModeMediaQuery.matches);

    useEffect(() => {
        const handleDarkModeChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

        darkModeMediaQuery.addListener(handleDarkModeChange);
        return () => {
            darkModeMediaQuery.removeListener(handleDarkModeChange);
        };
    }, [darkModeMediaQuery.matches, setDarkMode]);

    return darkMode ? 'dark' : 'light';
}
