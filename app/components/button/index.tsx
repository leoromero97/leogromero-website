import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

import { buttonStyles } from "./styles";
import { IAnchorButtonProps, IButtonProps } from "./types";
import Icon from "../icon";

function Button({
  onClick,
  className,
  children,
  disabled,
  external,
  text,
  title,
  variation = "primary",
  icon,
  iconPosition = "left",
  type = "button",
  to,
  ...props
}: IButtonProps | IAnchorButtonProps) {
  if (to) {
    return (
      <Link
        href={to}
        onClick={onClick}
        className={clsx(
          buttonStyles[variation],
          disabled
            ? "pointer-events-none opacity-50 focus:outline-none focus:ring-0 focus-within:ring-0"
            : "",
          className
        )}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconPosition === "left" && icon && <Icon icon={icon} />}
        {children || text || title}
        {iconPosition === "right" && icon && <Icon icon={icon} />}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        className={clsx(
          buttonStyles[variation],
          disabled
            ? "pointer-events-none opacity-50 focus:outline-none focus:ring-0 focus-within:ring-0"
            : "",
          className,
        )}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconPosition === "left" && icon && <Icon icon={icon} />}
        {children || text || title}
        {iconPosition === "right" && icon && <Icon icon={icon} />}
      </a>
    );
  }

  return (
    <button
      className={clsx(
        buttonStyles[variation],
        className,
        disabled
          ? "pointer-events-none opacity-50 focus:outline-none focus:ring-0 focus-within:ring-0"
          : ""
      )}
      title={title}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconPosition === "left" && icon && <Icon icon={icon} />}
      {children || text || title}
      {iconPosition === "right" && icon && <Icon icon={icon} />}
    </button>
  );
}

export default Button;
