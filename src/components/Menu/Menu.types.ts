import { ReactElement } from "react";

export interface IMenuItemProps {
  name: string;
  children: string | ReactElement;
}