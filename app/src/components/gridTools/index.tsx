import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { TOOLS } from "@/constants/tools";
import useTheme from "@/hooks/useTheme";

export default function GridTools() {
  const { isDark, isLight } = useTheme();

  return (
    <ul className="hidden lg:grid py-2 gap-6 grid-cols-4">
      {TOOLS.map(({ icon, id, title }) => (
        <li
          key={id}
          className={clsx(
            "rounded-[4px] min-h-12 min-w-12  border-silver-600 flex flex-col items-center justify-center gap-2 p-2",
            isDark && "bg-silver-900",
            isLight && "bg-silver-0"
          )}
          title={title}
        >
          <Image src={icon} alt={title} height={48} width={48} />
          <span
            className={clsx(
              "text-xs text-center",
              isDark && "text-silver-0",
              isLight && "text-silver-900"
            )}
          >
            {title}
          </span>
        </li>
      ))}
    </ul>
  );
}
