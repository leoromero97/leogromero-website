import { IComponentIconProps } from "./types";

const MenuBurger = ({ className }: IComponentIconProps) => (
  <svg
    width="32"
    height="28"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="4" y1="3" x2="28" y2="3" stroke="currentColor" strokeWidth="2" />
    <line
      x1="4"
      y1="13"
      x2="24"
      y2="13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="4"
      y1="23"
      x2="28"
      y2="23"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default MenuBurger;
