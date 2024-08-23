import { ReactElement } from "react";
import css from './MenuItem.module.css';

interface MenuItemProps {
  name: string;
  children: string | ReactElement;
}

export const MenuItem = ({ name, children }: MenuItemProps) => {
  return (
    <li className={css.item}>
      <span className={css['item-name']}># {name}</span>
      {children}
    </li>
  )
}