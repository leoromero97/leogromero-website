"use client";

import Button from "@/components/button";
import { externalLink } from "@/constants/externalMessage";
import { texts } from "@/constants/texts";
import useTheme from "@/hooks/useTheme";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const servicesInHero = [
  "página web",
  "landing page",
  "e-commerce",
  "manual de identidad",
  "carta digital",
  "logotipo",
  "flyer para redes",
];

function HeroSection() {
  const title = "Creemos juntos tu";
  const [currentLabelIndex, setCurrentLabelIndex] = useState<number>(0);
  const { isDark, isLight } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabelIndex(
        (prevIndex) => (prevIndex + 1) % servicesInHero.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col pt-36 md:pt-52 lg:pt-80 xl:pt-96 lg:pb-20 gap-10 w-full max-w-7xl px-8 lg:gap-14 lg:bg-hero-pattern lg:bg-no-repeat lg:bg-right ease-in-out">
      <h1
        className={clsx(
          "min-h-96 text-h3 md:text-h2 font-bold lg:text-h1 flex flex-col gap-2 lg:h-96",
          isDark && "text-silver-200",
          isLight && "text-silver-700"
        )}
      >
        <span>{title.concat(" ")}</span>
        <span
          className={clsx(
            isDark && "text-silver-0",
            isLight && "text-silver-900"
          )}
        >
          {servicesInHero[currentLabelIndex].concat(" ")}
        </span>
        <span>🚀</span>
      </h1>
      <Button
        text={texts.actions.contactForWpp}
        icon="WhatsApp"
        className={"w-full max-w-sm hidden md:flex"}
        external
        to={externalLink}
      />
    </section>
  );
}

export default HeroSection;
