import { IconProps, parseIconProps } from './types';

export const SwordsIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M5 13L11 19M14.32 17.32L18 21L21 18L17.635 14.635M10 5.5L8 3H3V8L6 10.5M21 3V8L10 17L6 21L3 18L7 14L16 3H21Z"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  )
}
