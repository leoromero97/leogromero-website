import { AnchorHTMLAttributes, ReactNode } from "react";
import { IconList } from "../icon/types";

export type ButtonStatesType = "default" | "hover" | "pressed" | "disabled";

export type ButtonVariationType = "primary" | "secondary" | "gradient";

export type ButtonIconPositionType = "left" | "right";

export type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface IButtonProps {
  as?: "button" | "a";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  variation?: ButtonVariationType;
  text?: string;
  title?: string;
  icon?: IconList;
  iconPosition?: "left" | "right";
  type?: ButtonTypes;
  to?: string;
  external?: boolean;
}

export interface IAnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string;
  className?: string;
  variation?: ButtonVariationType;
  text?: string;
  icon?: IconList;
  iconPosition?: ButtonIconPositionType;
  to: string;
  disabled?: boolean;
  external?: boolean;
  onClick?: never;
  type?: never;
}
