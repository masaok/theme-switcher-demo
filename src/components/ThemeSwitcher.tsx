'use client';

import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { 
  Brightness4, 
  Brightness7, 
  SettingsBrightness,
  DarkMode,
  LightMode,
  Computer 
} from '@mui/icons-material';
import { useThemeContext } from './ThemeProvider';

export function ThemeSwitcher() {
  const { themeMode, resolvedTheme, setTheme, mounted } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (mode: 'light' | 'dark' | 'system') => {
    setTheme(mode);
    handleClose();
  };

  if (!mounted) {
    return (
      <IconButton color="inherit" disabled>
        <SettingsBrightness />
      </IconButton>
    );
  }

  const currentIcon = resolvedTheme === 'dark' ? <DarkMode /> : <LightMode />;

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-label="theme switcher"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {currentIcon}
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
      >
        <MenuItem 
          onClick={() => handleThemeSelect('light')}
          selected={themeMode === 'light'}
        >
          <ListItemIcon>
            <LightMode fontSize="small" />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>
        <MenuItem 
          onClick={() => handleThemeSelect('dark')}
          selected={themeMode === 'dark'}
        >
          <ListItemIcon>
            <DarkMode fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>
        <MenuItem 
          onClick={() => handleThemeSelect('system')}
          selected={themeMode === 'system'}
        >
          <ListItemIcon>
            <Computer fontSize="small" />
          </ListItemIcon>
          <ListItemText>System</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}