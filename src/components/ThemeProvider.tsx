'use client';

import { createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../theme/theme';
import { useTheme } from '../hooks/useTheme';

interface ThemeContextType {
  themeMode: 'light' | 'dark' | 'system';
  resolvedTheme: 'light' | 'dark';
  setTheme: (mode: 'light' | 'dark' | 'system') => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback for SSR
    return {
      themeMode: 'light' as const,
      resolvedTheme: 'light' as const,
      setTheme: () => {},
      mounted: false,
    };
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeHook = useTheme();
  const { resolvedTheme } = themeHook;

  const muiTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={themeHook}>
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}