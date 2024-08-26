import { NavbarItem } from './NavbarItem';
import css from './Navbar.module.css';
import { UserIcon, SwordsIcon, BoxIcon, Briefcase1Icon } from '../Icon';

export const Navbar = () => {
  return (
    <nav className={css['Navbar']}>
      <NavbarItem path='#'>
        <UserIcon pixelSize='100%' />
      </NavbarItem>
      <NavbarItem path='#'>
        <SwordsIcon pixelSize='100%' />
      </NavbarItem>
      <NavbarItem path='#'>
        <BoxIcon pixelSize='100%' />
      </NavbarItem>
      <NavbarItem path='#'>
        <Briefcase1Icon pixelSize='100%' />
      </NavbarItem>
    </nav>
  )
}
