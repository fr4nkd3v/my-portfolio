import { useEffect, useState } from 'react';
import css from './ThemeToggleButton.module.css';
import { MoonIcon, SunIcon } from '~/components/Icon';
import { type ThemeTypes } from '~/types';
import { getSystemTheme, setAppTheme } from '~/utils';

const ThemeToggleButton = () => {
  const [ theme, setTheme] = useState<ThemeTypes>('light');

  useEffect(() => {
    const systemTheme = getSystemTheme();
    setAppTheme(systemTheme);
    setTheme(systemTheme);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    event.stopPropagation();
    setTheme(newTheme);
    setAppTheme(newTheme);
    console.log('click in ThemeToggleButton');
  }

  return (
    <button className={css['button-root']} onClick={handleClick} >
      <MoonIcon pixelSize={32} />
      <SunIcon pixelSize={32} />
      <div className={`${css.indicator} ${css[theme]}`}></div>
    </button>
  )
}

export default ThemeToggleButton;