import { IComponentIconProps } from "./types";

const Calendar = ({ className }: IComponentIconProps) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.625 10.3077H5.375M9.21154 7.56731V5.375M15.7885 7.56731L15.7885 5.375M8.66346 13.5962H9.75961M11.9519 13.5962H13.0481M15.2404 13.5962H16.3365M8.66346 16.3365H9.75961M11.9519 16.3365H13.0481M15.2404 16.3365H16.3365M5.375 8.66347L5.375 17.4327C5.375 18.6435 6.35653 19.625 7.56731 19.625L17.4327 19.625C18.6435 19.625 19.625 18.6435 19.625 17.4327V8.66349C19.625 7.45271 18.6435 6.47118 17.4327 6.47118L7.56731 6.47116C6.35653 6.47116 5.375 7.45269 5.375 8.66347Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Calendar;
