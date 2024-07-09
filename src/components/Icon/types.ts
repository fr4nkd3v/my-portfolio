export interface IconProps {
  pixelSize?: number;
  color?: string;
  strokeWidth?: number;
}

export interface FinalIconProps {
  color: string;
  strokeWidth: string;
  styles: {
    width: string,
    height: string,
  };
}

export function parseIconProps(
  { color = 'currentColor', strokeWidth = 2, pixelSize = 24 }: IconProps
): FinalIconProps {
  return {
    color,
    strokeWidth: strokeWidth.toString(),
    styles: {
      width: `${pixelSize}px`,
      height: `${pixelSize}px`,
    }
  };
}