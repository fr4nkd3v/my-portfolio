import { ReactElement } from 'react';
import css from './styles.module.css';

export default function Menu() {
  return (
    <ul className={css.menu}>
      <MenuItem name='Theme'>
        <button>Representa el toogle button</button>
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

/* Component MenuItem */

interface MenuItemProps {
  name: string;
  children: string | ReactElement;
}

function MenuItem({ name, children }: MenuItemProps) {
  return (
    <li className={css.item}>
      <span className={css['item-name']}># {name}</span>
      {children}
    </li>
  )
}