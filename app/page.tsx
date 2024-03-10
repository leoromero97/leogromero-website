import clsx from "clsx";
import Navbar from "./components/navbar";
import HeroSection from "./components/sections/hero";
import Button from "./components/button";
import { texts } from "./constants/texts";
import { externalLink } from "./constants/externalMessage";

export default function Home() {
  return (
    <main
      className={clsx(
        `flex 
      flex-col 
      items-center 
      w-full 
      h-auto 
      min-h-screen
      `
      )}
    >
      <Navbar />
      <div className="flex absolute min-w-[500px] min-h-[500px] lg:min-h-[1400px] lg:min-w-[1400px] bg-gradient-to-br from-transparent to-blue-600 rounded-full -left-40 top-8 lg:top-0 -z-20 blur-3xl opacity-60"></div>
      <HeroSection />
      <div className="w-full bottom-14 fixed md:hidden flex items-center justify-center px-2">
        <Button
          text={texts.actions.contactForWpp}
          icon="WhatsApp"
          external
          to={externalLink}
          className="w-full max-w-sm"
        />
      </div>
    {/*   <div className="flex absolute min-w-96 min-h-96 lg:min-h-[800px] lg:min-w-[800px] bg-gradient-to-br from-transparent to-blue-600 rounded-full left-1/2 transform -translate-x-1/2 -z-20 blur-3xl"></div>
      <div className="flex absolute min-w-96 min-h-96 lg:min-h-[800px] lg:min-w-[800px] bg-gradient-to-br from-transparent to-blue-600 rounded-full left-0 bottom-0 -z-20 blur-3xl"></div> */}
    </main>
  );
}
