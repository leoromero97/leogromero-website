import { TOOLS } from "@/constants/tools";
import Image from "next/image";

export default function SliderTools() {
  return (
    <div className="w-full bg-transparent lg:hidden">
      <ul className="flex py-2 gap-4 w-screen animate-autoSliderMobile lg:animate-none">
        {TOOLS.map(({ icon, id, title }) => (
          <li
            key={id}
            className="rounded-[4px] min-h-12 min-w-12 bg-silver-900 border-silver-600"
            title={title}
          >
            <Image src={icon} alt={title} height={48} width={48} />
            <span className="hidden lg:flex text-xs text-center">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
