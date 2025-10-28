import clsx from "clsx";
import React from "react";
import { PillProps } from "./types";
import { pillCategoryStyles } from "./styles";

export default function Pill({ category, label, className }: PillProps) {
  return (
    <small className={clsx(pillCategoryStyles[category], className)}>
      {label}
    </small>
  );
}
