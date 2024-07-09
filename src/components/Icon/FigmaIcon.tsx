import { IconProps, parseIconProps } from './types';

export const FigmaIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M12 12C12 12.7956 12.3161 13.5587 12.8787 14.1213C13.4413 14.6839 14.2044 15 15 15C15.7956 15 16.5587 14.6839 17.1213 14.1213C17.6839 13.5587 18 12.7956 18 12C18 11.2044 17.6839 10.4413 17.1213 9.87868C16.5587 9.31607 15.7956 9 15 9C14.2044 9 13.4413 9.31607 12.8787 9.87868C12.3161 10.4413 12 11.2044 12 12Z"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
      <path
        d="M6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H15C15.7956 3 16.5587 3.31607 17.1213 3.87868C17.6839 4.44129 18 5.20435 18 6C18 6.79565 17.6839 7.55871 17.1213 8.12132C16.5587 8.68393 15.7956 9 15 9H9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6Z"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
      <path
        d="M9 9C8.20435 9 7.44129 9.31607 6.87868 9.87868C6.31607 10.4413 6 11.2044 6 12C6 12.7956 6.31607 13.5587 6.87868 14.1213C7.44129 14.6839 8.20435 15 9 15M9 15H12M9 15C8.40666 15 7.82664 15.1759 7.33329 15.5056C6.83994 15.8352 6.45543 16.3038 6.22836 16.8519C6.0013 17.4001 5.94189 18.0033 6.05765 18.5853C6.1734 19.1672 6.45912 19.7018 6.87868 20.1213C7.29824 20.5409 7.83279 20.8266 8.41473 20.9424C8.99667 21.0581 9.59987 20.9987 10.1481 20.7716C10.6962 20.5446 11.1648 20.1601 11.4944 19.6667C11.8241 19.1734 12 18.5933 12 18V3"
        stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  )
}
