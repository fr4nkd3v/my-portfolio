import { IconProps, parseIconProps } from './types';

export const ToolsIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M14.5 5.5003L18.5 9.5003M3 21.0003H7L20 8.0003C20.5304 7.46987 20.8284 6.75045 20.8284 6.0003C20.8284 5.25016 20.5304 4.53074 20 4.0003C19.4696 3.46987 18.7501 3.17188 18 3.17188C17.2499 3.17188 16.5304 3.46987 16 4.0003L3 17.0003V21.0003Z"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M12 8L7 3L3 7L8 12M7 8L5.5 9.5M16 12L21 17L17 21L12 16M16 17L14.5 18.5"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
