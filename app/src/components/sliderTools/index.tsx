import { TOOLS } from "@/constants/tools";
import useTheme from "@/hooks/useTheme";
import clsx from "clsx";
import Image from "next/image";

export default function SliderTools() {
  const { isDark, isLight } = useTheme();

  return (
    <div className="w-full bg-transparent lg:hidden">
      <ul className="flex py-2 gap-4 w-screen animate-autoSliderMobile lg:animate-none">
        {TOOLS.map(({ icon, id, title }) => (
          <li
            key={id}
            className={clsx(
              "rounded-[4px] min-h-12 min-w-12 bg-silver-900 border-silver-600",
              isDark && "bg-silver-900",
              isLight && "bg-silver-0"
            )}
            title={title}
          >
            <Image src={icon} alt={title} height={48} width={48} />
            <span
              className={clsx(
                "hidden lg:flex text-xs text-center",
                isDark && "text-silver-0",
                isLight && "text-silver-900"
              )}
            >
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
