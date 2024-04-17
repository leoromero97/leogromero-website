import { TOOLS } from "@/constants/tools";
import Image from "next/image";
import React from "react";

export default function GridTools() {
  return (
    <ul className="hidden lg:grid py-2 gap-6 grid-cols-4">
      {TOOLS.map(({ icon, id, title }) => (
        <li
          key={id}
          className="rounded-[4px] min-h-12 min-w-12 bg-silver-900 border-silver-600 flex flex-col items-center justify-center gap-2 p-2"
          title={title}
        >
          <Image src={icon} alt={title} height={48} width={48} />
          <span className="text-xs text-center">{title}</span>
        </li>
      ))}
    </ul>
  );
}
