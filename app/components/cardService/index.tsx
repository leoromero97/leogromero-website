import React from "react";
import { CardServiceProps } from "./types";
import Pill from "../pill";
import Link from "next/link";
import Icon from "../icon";
import useTheme from "@/hooks/useTheme";
import clsx from "clsx";

export default function CardService({
  category,
  categoryLabel,
  href,
  id,
  title,
}: Readonly<CardServiceProps>) {
  const { isDark, isLight } = useTheme();

  return (
    <Link
      id={id}
      href={href ?? ""}
      className={clsx(
        `
        flex 
        py-6 
        px-4 
        gap-2 
        items-center
        justify-between  
        max-w-80 
        border 
        rounded-2xl 
        min-w-[320px]
        min-h-[140px]
        ease-in-out
        bg-gradient-to-b 
        `,
        isDark &&
          `
          border-silver-700 
          text-silver-0
          from-[#33343E] 
          to-[#3E3F4908]
          focus-within:border-silver-200
          focus-visible:border-silver-200
          focus:border-silver-200
          hover:from-silver-900`,
        isLight &&
          `
          border-silver-200 
          text-silver-900
          from-[#cbcff5] 
          to-[#b7b9d708]
          focus-within:border-silver-700
          focus-visible:border-silver-700
          focus:border-silver-700
          hover:from-silver-0
          `
      )}
    >
      <div className="flex flex-col gap-3">
        <Pill label={categoryLabel} category={category} />
        <span className={"text-bodyLarge"}>{title}</span>
      </div>
      <Icon icon="IconRight" className="min-h-6 h-6 min-w-6 w-6" />
    </Link>
  );
}
