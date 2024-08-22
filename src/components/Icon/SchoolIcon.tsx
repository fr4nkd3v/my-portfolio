import { IconProps, parseIconProps } from './types';

export const SchoolIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M6 10.5996V15.9996C6 16.7953 6.63214 17.5583 7.75736 18.1209C8.88258 18.6835 10.4087 18.9996 12 18.9996C13.5913 18.9996 15.1174 18.6835 16.2426 18.1209C17.3679 17.5583 18 16.7953 18 15.9996V10.5996"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
