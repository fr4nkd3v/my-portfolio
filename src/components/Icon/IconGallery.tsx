import { IconProps } from "./types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BoxIcon,
  Briefcase1Icon,
  Briefcase2Icon,
  CertificateIcon,
  CheckIcon,
  CopyIcon,
  DiscordIcon,
  ExternalIcon,
  ExternalWorldIcon,
  FigmaIcon,
  FullStackIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MoonIcon,
  MouseIcon,
  PartialStackIcon,
  SchoolIcon,
  SlackIcon,
  SunIcon,
  SwordsIcon,
  TelegramIcon,
  ToolsIcon,
  UserIcon,
} from './index';

export const IconGallery = ({ color, pixelSize, strokeWidth }: IconProps) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${pixelSize}px), 1fr))`,
        gap: '10px',
        width: '100%',
        padding: '1rem',
        border: '2px solid #CCCCCC',
        borderRadius: '8px',
      }}
    >
      <ArrowLeftIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <ArrowRightIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <BoxIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <Briefcase1Icon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <Briefcase2Icon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <CertificateIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <CheckIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <CopyIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <DiscordIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <ExternalIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <ExternalWorldIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <FigmaIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <FullStackIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <GithubIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <InstagramIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <LinkedinIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <MoonIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <MouseIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <PartialStackIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <SchoolIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <SlackIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <SunIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <SwordsIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <TelegramIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <ToolsIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
      <UserIcon color={color} pixelSize={pixelSize} strokeWidth={strokeWidth} />
    </div>
  )
}
