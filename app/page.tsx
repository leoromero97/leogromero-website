"use client";

import clsx from "clsx";
import Navbar from "./components/navbar";
import HeroSection from "./components/sections/hero";
import Button from "./components/button";
import { texts } from "./constants/texts";
import { externalLink } from "./constants/externalMessage";
import AboutSection from "./components/sections/about";
import ServicesSection from "./components/sections/services";
import Footer from "./components/footer";
import useTheme from "./hooks/useTheme";

export default function Home() {
  const { isDark, isLight } = useTheme();

  return (
    <main
      className={clsx(
        `flex 
      flex-col 
      items-center 
      w-full 
      h-auto 
      min-h-screen
      overflow-x-hidden
      `,
        isDark && "bg-blue-900 bg-opacity-60 text-silver-0",
        isLight && "bg-blue-0 text-silver-900"
      )}
    >
      <Navbar />
      <div className="flex absolute min-w-[400px] min-h-[400px] lg:min-h-[1000px] lg:min-w-[1000px] bg-gradient-to-br from-transparent to-blue-600 rounded-full -left-40 top-8 lg:top-0 -z-20 blur-3xl opacity-60"></div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="w-full bottom-14 fixed md:hidden flex items-center justify-center px-2">
        <Button
          text={texts.actions.contactForWpp}
          icon="WhatsApp"
          external
          to={externalLink}
          className="w-full max-w-sm"
        />
      </div>
      <Footer />
    </main>
  );
}
