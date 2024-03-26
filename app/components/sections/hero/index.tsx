"use client";

import Button from "@/components/button";
import { externalLink } from "@/constants/externalMessage";
import { texts } from "@/constants/texts";
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
  const [currentLabelIndex, setCurrentLabelIndex] = useState<number>(0);
  const title = "Creemos juntos tu";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabelIndex(
        (prevIndex) => (prevIndex + 1) % servicesInHero.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col pt-36 md:pt-52 lg:pt-80 xl:pt-96 pb-20 gap-10 w-full max-w-7xl px-8 lg:gap-14 lg:bg-hero-pattern lg:bg-no-repeat lg:bg-right">
      <h1 className="text-h3 md:text-h2 font-bold text-silver-300 lg:text-h1 flex flex-col gap-2 lg:h-96">
        <span>{title.concat(" ")}</span>
        <span className="text-silver-0">
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
