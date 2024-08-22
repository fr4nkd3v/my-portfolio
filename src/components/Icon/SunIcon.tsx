import { IconProps, parseIconProps } from './types';

export const SunIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M6.343 17.657L4.929 19.071M6.343 6.343L4.929 4.929M17.657 6.343L19.071 4.929M17.657 17.657L19.071 19.071M4 12H2M12 4V2M20 12H22M12 20V22M14.828 14.828C15.21 14.459 15.5148 14.0176 15.7244 13.5296C15.934 13.0416 16.0444 12.5167 16.049 11.9856C16.0536 11.4545 15.9524 10.9278 15.7513 10.4362C15.5502 9.9446 15.2532 9.49799 14.8776 9.12242C14.502 8.74685 14.0554 8.44984 13.5638 8.24871C13.0722 8.04759 12.5455 7.94638 12.0144 7.951C11.4833 7.95561 10.9584 8.06596 10.4704 8.27559C9.98237 8.48523 9.54099 8.78996 9.172 9.172C8.44337 9.92641 8.04019 10.9368 8.0493 11.9856C8.05842 13.0344 8.47909 14.0376 9.22073 14.7793C9.96236 15.5209 10.9656 15.9416 12.0144 15.9507C13.0632 15.9598 14.0736 15.5566 14.828 14.828Z"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
