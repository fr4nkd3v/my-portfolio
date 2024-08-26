import { ReactElement } from "react";

const socialMediaListAvailable = [
  'github',
  'discord',
  'linkedin',
  'slack',
  'telegram',
  'instagram'
] as const;

type TSocialMedia = typeof socialMediaListAvailable[number];

// type TSocialMediaObject = {
//   [key in TSocialMedia]: string;
// };

export type TSocialMediaArray = TSocialMediaElement[];
type TSocialMediaElement = {
  socialMedia: TSocialMedia,
  link: string,
}

export type TSocialMediaIcons = {
  [key in TSocialMedia]: ReactElement;
};

export interface ISocialbarProps {
  data: TSocialMediaArray;
}

export interface ISocialbarItemProps {
  type: TSocialMedia;
  link: string;
}