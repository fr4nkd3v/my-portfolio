import { CSSProperties } from 'react';

interface LogoProps {
  styles?: CSSProperties;
}

export const Fr4nkd3vLogo = ({ styles }: LogoProps) => {
  return (
    <svg
      width="65" height="68" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg"
      className='fr4nkd3v-logo'
      style={styles}
    >
      <path
        d="M32.2098 67.9955V55.0519H19.3513V67.9955H32.2098ZM32.2098 25.7044V17.7588H19.3513H0V30.7024H19.3513V37.2383H32.2098V30.7024V25.7044Z"
        fillRule="evenodd" clipRule="evenodd"
        style={{fill: 'var(--theme-color-primary-base)'}}
      />
      <path
        d="M32.4096 0H19.5512V12.9437V14.6097H32.4096V12.9437H38.7752H38.9025C46.0319 12.9437 51.7609 18.8388 51.7609 25.8873C51.7609 33.064 46.0319 38.831 38.9025 38.831H38.7752H32.4096H19.5512H6.56543V51.9028H19.5512H32.4096V51.7746H38.7752H38.9025C53.1614 51.7746 64.6194 40.1125 64.6194 25.8873C64.6194 11.6621 53.1614 0 38.9025 0H38.7752H32.4096Z"
        style={{fill: 'var(--theme-logo-color-contrasted)'}}
      />
    </svg>
  )
}
