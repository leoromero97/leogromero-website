import { IComponentIconProps } from "./types";

const Close = ({ className }: IComponentIconProps) => (
  <svg
    width="32"
    height="28"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="6.70698"
      y1="3.29295"
      x2="26.506"
      y2="23.0919"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="5.29298"
      y1="23.2928"
      x2="25.092"
      y2="3.49384"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default Close;
