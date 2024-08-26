import type { IDropdownProps } from './Dropdown.types';
import css from './Dropdown.module.css';
import { ChevronDownIcon } from '../Icon';

export const Dropdown = ({ dataList }: IDropdownProps) => {
  return (
    <div className={css['Dropdown-root']}>
      <div className={css['Dropdown-icon']}>
        <ChevronDownIcon pixelSize={'100%'} />
      </div>
      <select className={css.Dropdown}>
        {dataList.map(({ item, value }) => (
          <option className={css['Dropdown-item']} value={value}>{item}</option>
        ))}
      </select>
    </div>
  )
}
