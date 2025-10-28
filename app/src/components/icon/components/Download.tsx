import { IComponentIconProps } from "./types";

const Download = ({ className }: IComponentIconProps) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.5 5.375L12.5 16.3366M12.5 16.3366L9.21153 13.0481M12.5 16.3366L15.7885 13.0481M5.37494 14.6923V17.4327C5.37494 18.6435 6.35647 19.625 7.56726 19.625H17.4327C18.6435 19.625 19.625 18.6435 19.625 17.4327V14.6923"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Download;
