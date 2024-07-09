import { IconProps, parseIconProps } from './types';

export const TelegramIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  )
}
