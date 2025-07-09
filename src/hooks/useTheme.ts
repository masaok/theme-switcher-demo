import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'theme-preference';

export function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
    const initialTheme = savedTheme || 'system';
    setThemeMode(initialTheme);
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    
    const resolved = initialTheme === 'system' ? systemTheme : initialTheme;
    setResolvedTheme(resolved);
    
    // Set the data attribute for MUI CSS variables
    document.documentElement.setAttribute('data-color-scheme', resolved);
    
    setMounted(true);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (themeMode === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(newTheme);
        document.documentElement.setAttribute('data-color-scheme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [themeMode]);

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
    
    let newResolvedTheme: 'light' | 'dark';
    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      newResolvedTheme = mediaQuery.matches ? 'dark' : 'light';
    } else {
      newResolvedTheme = mode;
    }
    
    setResolvedTheme(newResolvedTheme);
    document.documentElement.setAttribute('data-color-scheme', newResolvedTheme);
  };

  return {
    themeMode,
    resolvedTheme,
    setTheme,
    mounted,
  };
}