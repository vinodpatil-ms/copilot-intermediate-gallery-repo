// This script runs before React hydration to prevent theme flash
export const themeScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      const validThemes = ['light', 'dark', 'system'];
      const theme = validThemes.includes(savedTheme) ? savedTheme : 'system';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const effectiveTheme = theme === 'system' ? systemTheme : theme;
      
      if (effectiveTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Theme initialization error:', e);
    }
  })();
`;
