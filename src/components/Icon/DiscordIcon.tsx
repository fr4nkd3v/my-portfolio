import { IconProps, parseIconProps } from './types';

export const DiscordIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12ZM14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8946 14.7348 13 15 13C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12Z"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
      <path
        d="M15.4999 17C15.4999 18 16.9999 20 17.4999 20C18.9999 20 20.3329 18.333 20.9999 17C21.6669 15.333 21.4999 11.167 19.4999 5.5C18.0429 4.485 16.4999 4.16 14.9999 4L14.0279 5.923C12.6869 5.69124 11.316 5.69124 9.97495 5.923L8.99995 4C7.49995 4.16 5.95695 4.485 4.49995 5.5C2.49995 11.167 2.33295 15.333 2.99995 17C3.66695 18.333 4.99995 20 6.49995 20C6.99995 20 8.49995 18 8.49995 17"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
      <path
        d="M7 16.5C10.5 17.5 13.5 17.5 17 16.5"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  )
}
