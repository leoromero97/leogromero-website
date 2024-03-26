import { ButtonVariationType } from "./types";

export const baseStyles = `flex rounded-full gap-2 items-center justify-center font-semibold text-md lg:text-lg px-6 py-3 ease-in-out duration-300 disabled:cursor-not-allowed disabled:pointer-events-none`;

export const buttonStyles: { [key in ButtonVariationType]: string | string[] } =
  {
    primary: [
      baseStyles,
      "bg-blue-500 text-silver-0",
      "hover:bg-blue-600",
      "active:bg-blue-700",
      "focus:ring-4 focus:ring-blue-0 focus:outline-none",
    ],
    secondary: [
      baseStyles,
      "bg-silver-800 text-silver.0",
      "hover:bg-silver-700",
      "active:bg-silver-900",
      "focus:ring-4 focus:ring-silver-0 focus:outline-none",
    ],
    gradient: [
      baseStyles,
      "bg-gradient-to-r from-silver-0 to-cyan-100 text-silver-900 transition-colors ease-in-out",
      "hover:bg-gradient-to-r hover:from-silver-100 hover:to-cyan-200",
      "active:bg-gradient-to-r active:from-silver-200 active:to-cyan-400",
    ]
  };
