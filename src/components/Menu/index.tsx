import { ReactElement } from 'react';
import css from './styles.module.css';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

// Component MenuItem

interface MenuItemProps {
  name: string;
  children: string | ReactElement;
}

const MenuItem = ({ name, children }: MenuItemProps) => {
  return (
    <li className={css.item}>
      <span className={css['item-name']}># {name}</span>
      {children}
    </li>
  )
}

// Component Menu

const Menu = () => {
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

export default Menu;