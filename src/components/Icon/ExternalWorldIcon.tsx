import { IconProps, parseIconProps } from './types';

export const ExternalWorldIcon = (props: IconProps) => {
  const { color, strokeWidth, styles } = parseIconProps(props);

  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M20.9401 13.045C21.1519 11.2333 20.8082 9.39995 19.9545 7.78798C19.1008 6.176 17.7775 4.86147 16.1599 4.01857C14.5423 3.17566 12.7067 2.84418 10.8964 3.06805C9.08615 3.29191 7.38662 4.06055 6.02306 5.27212C4.65949 6.48369 3.69625 8.08099 3.26098 9.85236C2.82571 11.6237 2.93895 13.4855 3.5857 15.1911C4.23245 16.8967 5.38218 18.3654 6.88253 19.4028C8.38289 20.4402 10.163 20.9972 11.9871 21M3.60011 9H20.4001M3.60011 15H13.0001"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M11.5002 3C9.8155 5.69961 8.92236 8.81787 8.92236 12C8.92236 15.1821 9.8155 18.3004 11.5002 21M12.5002 3C14.4187 6.0741 15.3048 9.68083 15.0292 13.294M16.0002 22L21.0002 17M21.0002 17V21.5M21.0002 17H16.5002"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
