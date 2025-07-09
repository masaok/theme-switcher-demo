export function ThemeScript() {
  const themeScript = `
    (function() {
      const THEME_STORAGE_KEY = 'theme-preference';
      
      function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme;
        }
        
        // Check system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        return mediaQuery.matches ? 'dark' : 'light';
      }
      
      const theme = getInitialTheme();
      document.documentElement.classList.add(theme);
      document.documentElement.setAttribute('data-theme', theme);
      
      // Set CSS custom properties for immediate styling
      if (theme === 'dark') {
        document.documentElement.style.setProperty('--initial-background', '#121212');
        document.documentElement.style.setProperty('--initial-color', '#ffffff');
      } else {
        document.documentElement.style.setProperty('--initial-background', '#fafafa');
        document.documentElement.style.setProperty('--initial-color', '#000000');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  );
}