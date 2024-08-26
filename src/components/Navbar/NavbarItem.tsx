import css from './NavbarItem.module.css';
import type { INavbarItemProps } from './NavbarItem.types';

export const NavbarItem = ({ children, path }: INavbarItemProps) => {
  return (
    <a className={css['NavbarItem']} href={path}>
      <div className={css['NavbarItem-icon']}>
        {children}
      </div>
    </a>
  )
}
