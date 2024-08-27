import css from './MenuItem.module.css';
import type { IMenuItemProps } from './Menu.types';

export const MenuItem = ({ name, children }: IMenuItemProps) => {
  return (
    <li className={css.item}>
      <span className={css['item-name']}># {name}</span>
      {children}
    </li>
  )
}