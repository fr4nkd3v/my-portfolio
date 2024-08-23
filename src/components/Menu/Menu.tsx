import css from './Menu.module.css';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <ul className={css.menu}>
      <MenuItem name='Theme'>
        <ThemeToggleButton />
      </MenuItem>
      <MenuItem name='Language'>
        <select>
          <option value="eng">ENG</option>
          <option value="spa">SPA</option>
        </select>
      </MenuItem>
      <MenuItem name='Open CV'>Redirigir</MenuItem>
    </ul>
  )
}