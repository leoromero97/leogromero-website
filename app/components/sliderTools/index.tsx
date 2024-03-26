import { TOOLS } from "@/constants/tools";
import Image from "next/image";

export default function SliderTools() {
  return (
    <div className="w-full relative">
      <ul className="w-full flex p-2 gap-4 overflow-x-scroll absolute">
        {TOOLS.map(({ icon, id, title }) => (
          <li
            key={id}
            className="rounded-[4px] min-h-12 min-w-12 bg-silver-900 border-silver-600"
            title={title}
          >
            <Image src={icon} alt={title} height={48} width={48} />
            <span className="hidden lg:flex">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
