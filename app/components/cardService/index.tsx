import React from "react";
import { CardServiceProps } from "./types";
import Pill from "../pill";
import Link from "next/link";
import Icon from "../icon";

export default function CardService({
  category,
  categoryLabel,
  href,
  id,
  title,
}: CardServiceProps) {
  return (
    <Link
      id={id}
      href={href ?? ""}
      className={`
        flex 
        py-6 
        px-4 
        gap-2 
        items-center
        justify-between 
        text-silver-0 
        max-w-80 
        border 
        border-silver-700 
        rounded-2xl 
        bg-gradient-to-b 
        from-[#33343E] 
        to-[#3E3F4908]
        focus-within:border-silver-300
        focus-visible:border-silver-300
        focus:border-silver-300
        min-w-[320px]
        min-h-[140px]
        hover:from-silver-900
        ease-in-out
        `}
    >
      <div className="flex flex-col gap-3">
        <Pill label={categoryLabel} category={category} />
        <span className="text-bodyLarge">{title}</span>
      </div>
      <Icon icon="IconRight" className="min-h-6 h-6 min-w-6 w-6" />
    </Link>
  );
}
