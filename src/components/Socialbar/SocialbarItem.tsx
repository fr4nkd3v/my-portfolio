import type { ISocialbarItemProps, TSocialMediaIcons } from './Socialbar.types';
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SlackIcon,
  TelegramIcon
} from '../Icon';
import css from './SocialbarItem.module.css';

export const SocialbarItem = ({ type, link }: ISocialbarItemProps) => {
  const icons: TSocialMediaIcons = {
    discord: <DiscordIcon pixelSize='100%' />,
    github: <GithubIcon pixelSize='100%' />,
    instagram: <InstagramIcon pixelSize='100%' />,
    linkedin: <LinkedinIcon pixelSize='100%' />,
    slack: <SlackIcon pixelSize='100%' />,
    telegram: <TelegramIcon pixelSize='100%' />,
  }

  return (
    <li className={css['SocialbarItem']}>
      <a className={css['SocialbarItem-link']} href={link}>
        {icons[type]}
      </a>
    </li>
  )
}
