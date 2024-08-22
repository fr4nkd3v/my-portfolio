import { ThemeTypes } from '~/types/index';

export function getSystemTheme(): ThemeTypes {
  return (
    window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  );
}

export function getAppTheme(): ThemeTypes | undefined {
  if (document.body.classList.contains('light-theme'))
    return 'light';
  else if (document.body.classList.contains('dark-theme'))
    return 'dark';
}

export function setAppTheme(theme: ThemeTypes) {
  document.body.classList.add(
    theme === 'light' ? 'light-theme' : 'dark-theme'
  );
  document.body.classList.remove(
    theme === 'light' ? 'dark-theme' : 'light-theme'
  );
}