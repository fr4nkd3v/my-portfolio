import { IconProps, parseIconProps } from './types';

export const PartialStackIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M4 14L12 18L20 14M12 6L4 10L12 14L20 10L12 6Z"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  )
}
