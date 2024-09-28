import { CategoryTypes } from "./types";

export const pillBaseStyles = `flex items-center justify-center py-[2px] px-3 rounded-lg text-body-small font-semibold w-fit`;

export const pillCategoryStyles: { [key in CategoryTypes]: string | string[] } =
  {
    advisory: [pillBaseStyles, "bg-red-soft text-red-dark"],
    design: [pillBaseStyles, "bg-purple-soft text-purple-dark"],
    development: [pillBaseStyles, "bg-green-soft text-green-dark"],
    education: [pillBaseStyles, "bg-yellow-soft text-yellow-dark"],
  };
