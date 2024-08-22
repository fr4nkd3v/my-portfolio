import { IconProps, parseIconProps } from './types';

export const MoonIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M11.9998 3.00019H12.3928C11.1081 4.19389 10.2824 5.80003 10.0591 7.53941C9.83577 9.27879 10.229 11.0414 11.1705 12.5209C12.112 14.0004 13.5422 15.1032 15.2124 15.6377C16.8826 16.1721 18.6873 16.1043 20.3128 15.4462C19.6875 16.9507 18.6656 18.2572 17.356 19.2264C16.0464 20.1957 14.4982 20.7912 12.8767 20.9496C11.2552 21.1079 9.62104 20.8231 8.14867 20.1256C6.6763 19.428 5.42089 18.3439 4.51637 16.9888C3.61185 15.6337 3.09213 14.0585 3.01267 12.4312C2.9332 10.8038 3.29696 9.18548 4.06515 7.7487C4.83334 6.31192 5.97714 5.11061 7.37454 4.27292C8.77195 3.43523 10.3705 2.99258 11.9998 2.99219V3.00019Z"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
