import css from './Socialbar.module.css';
import type { ISocialbarProps } from './Socialbar.types';
import { SocialbarItem } from './SocialbarItem';

export const Socialbar = ({ data }: ISocialbarProps) => {
  return (
    <ul className={css['Socialbar']}>
      {data.map(({ socialMedia, link }) => (
        <SocialbarItem type={socialMedia} link={link} />
      ))}
    </ul>
  )
}
