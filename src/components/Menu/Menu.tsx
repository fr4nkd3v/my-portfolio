import css from './Menu.module.css';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { Dropdown } from '~/components/Dropdown';
import { MenuItem } from './MenuItem';
import { ExternalIcon } from '../Icon';

const dropdownDataList = [
  {
    item: 'ENG',
    value: 'eng'
  },
  {
    item: 'SPA',
    value: 'spa'
  },
];

export const Menu = () => {
  return (
    <ul className={css.menu}>
      <MenuItem name='Theme' key='Theme'>
        <ThemeToggleButton />
      </MenuItem>
      <MenuItem name='Language' key='Language'>
        <Dropdown
          dataList={dropdownDataList}
        />
      </MenuItem>
      <MenuItem name='Open CV' key='Open CV'>
      <a href="#">
        <ExternalIcon pixelSize={30} />
      </a>
      </MenuItem>
    </ul>
  )
}